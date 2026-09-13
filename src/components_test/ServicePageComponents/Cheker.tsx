import { useState } from "react";
import { checkIngredients, type CheckResults } from "../../lib/ingredientChecker";
import { preprocessForOcr } from "../../lib/ocrPreprocess";
import LabelCropModal from "./LabelCropModal";

const EVIDENCE_COLORS: Record<string, string> = {
  strong: "bg-green-50 border-green-300 text-green-800",
  moderate: "bg-blue-50 border-blue-300 text-blue-800",
  limited: "bg-yellow-50 border-yellow-300 text-yellow-800",
};

function evidenceClass(evidenceLevel: string | null) {
  if (!evidenceLevel) return "bg-gray-50 border-gray-300 text-gray-700";
  const key = evidenceLevel.toLowerCase();
  if (key.includes("strong")) return EVIDENCE_COLORS.strong;
  if (key.includes("moderate")) return EVIDENCE_COLORS.moderate;
  return EVIDENCE_COLORS.limited;
}

type ScanStatus = "idle" | "loading" | "recognizing" | "error";

const Cheker = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<CheckResults | null>(null);
  const [scanStatus, setScanStatus] = useState<ScanStatus>("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [pendingImageUrl, setPendingImageUrl] = useState<string | null>(null);

  const submitBtn = () => {
    if (!input.trim()) return;
    setResults(checkIngredients(input));
  };

  const resetBtn = () => {
    setInput("");
    setResults(null);
  };

  const handlePhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = ""; // allow re-selecting the same file next time
    if (!file) return;

    setResults(null);
    setScanStatus("idle");
    setPendingImageUrl(URL.createObjectURL(file));
  };

  const runOcr = async (source: HTMLCanvasElement) => {
    setScanStatus("loading");
    setScanProgress(0);

    let worker: Awaited<ReturnType<typeof import("tesseract.js").createWorker>> | null = null;
    try {
      const { createWorker } = await import("tesseract.js");
      worker = await createWorker("eng", 1, {
        logger: (m) => {
          if (m.status === "recognizing text") {
            setScanStatus("recognizing");
            setScanProgress(Math.round(m.progress * 100));
          }
        },
      });
      const { data } = await worker.recognize(source);
      setInput(data.text.trim());
      setScanStatus("idle");
    } catch (error) {
      console.error("Ingredient label scan failed:", error);
      setScanStatus("error");
    } finally {
      if (worker) await worker.terminate();
    }
  };

  const handleCropConfirm = (croppedCanvas: HTMLCanvasElement) => {
    if (pendingImageUrl) URL.revokeObjectURL(pendingImageUrl);
    setPendingImageUrl(null);
    preprocessForOcr(croppedCanvas);
    void runOcr(croppedCanvas);
  };

  const handleCropCancel = () => {
    if (pendingImageUrl) URL.revokeObjectURL(pendingImageUrl);
    setPendingImageUrl(null);
  };

  const hasAnyMatch = !!results && (results.avoidMatches.length > 0 || results.infoMatches.length > 0);
  const isScanning = scanStatus === "loading" || scanStatus === "recognizing";

  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="p-15 flex flex-col justify-center items-center gap-5 max-w-[700px]">
        <div>
          <h1 className="text-5xl text-center md:text-left">Ingredient Checker</h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-2xl">Your Ingredients</h1>
          <h1 className="text-xl">
            Add your ingredients below (separated by commas or new lines), or scan a product label with your
            camera, to check for known pore-clogging ingredients and see evidence-based info on recognized
            active ingredients.
          </h1>
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="cheker" className="sr-only">Ingredient list</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="cheker"
            id="cheker"
            placeholder="e.g. Water, Organic Coconut Oil, Niacinamide, Glycerin, Retinol..."
            className="w-full h-40 border hover:border-black transition-colors  duration-300 rounded-lg p-2"
          ></textarea>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="label-photo"
              className={`self-start rounded-full border px-4 py-2 text-sm font-medium ${
                isScanning ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:border-black"
              }`}
            >
              📷 {isScanning ? "Reading label..." : "Scan Ingredient Label"}
            </label>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              id="label-photo"
              disabled={isScanning}
              className="sr-only"
              onChange={handlePhotoSelected}
            />
            <div role="status" aria-live="polite" className="text-xs text-gray-500">
              {scanStatus === "loading" && "Loading text scanner..."}
              {scanStatus === "recognizing" && `Reading label... ${scanProgress}%`}
              {scanStatus === "error" && (
                <span className="text-red-600">
                  Couldn't read that photo — try a closer, well-lit shot of the ingredient list, or type it in manually.
                </span>
              )}
              {scanStatus === "idle" && input && "Scanned text added below — please check it over before submitting, scans aren't always perfect."}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5" role="status" aria-live="polite">
          {results && !hasAnyMatch && (
            <p className="font-bold">
              None of the {results.checkedCount} ingredient{results.checkedCount > 1 ? "s" : ""} you listed
              matched anything in our reference list.
            </p>
          )}

          {results && results.avoidMatches.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg text-red-600">
                {results.avoidMatches.length} ingredient{results.avoidMatches.length > 1 ? "s" : ""} known to
                potentially clog pores or cause acne:
              </h3>
              <ul className="flex flex-wrap gap-2">
                {results.avoidMatches.map((m, index) => (
                  <li
                    key={index}
                    className="rounded-full bg-red-50 border border-red-300 px-3 py-1 text-sm font-medium text-red-700"
                    title={`Matched on: ${m.matchedOn}`}
                  >
                    {m.ingredient}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results && results.infoMatches.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg">
                {results.infoMatches.length} recognized active ingredient{results.infoMatches.length > 1 ? "s" : ""}:
              </h3>
              <ul className="flex flex-col gap-2">
                {results.infoMatches.map((m, index) => (
                  <li key={index} className={`rounded-lg border p-3 text-sm text-left ${evidenceClass(m.record.evidenceLevel)}`}>
                    <div className="flex flex-wrap items-center gap-2 font-semibold">
                      <span>{m.ingredient}</span>
                      {m.record.prescriptionOnly && (
                        <span className="rounded-full bg-purple-100 border border-purple-400 text-purple-800 text-xs px-2 py-0.5 font-bold">
                          Prescription — consult a professional
                        </span>
                      )}
                      {m.record.evidenceLevel && (
                        <span className="text-xs font-normal opacity-75">Evidence: {m.record.evidenceLevel}</span>
                      )}
                    </div>
                    {m.record.benefits && <p className="mt-1">{m.record.benefits}</p>}
                    {m.record.risks && <p className="mt-1 opacity-80">Possible side effects: {m.record.risks}</p>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {results && results.interactions.length > 0 && (
            <div className="flex flex-col gap-2 rounded-lg border border-orange-300 bg-orange-50 p-3 text-sm text-orange-800">
              <h3 className="font-bold">Possible interactions between ingredients you listed:</h3>
              <ul className="flex flex-col gap-2">
                {results.interactions.map((it, index) => (
                  <li key={index}>
                    <span className="font-semibold">{it.ingredientA} + {it.ingredientB}:</span> {it.userMessage}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex gap-2 justify-center md:justify-start w-full">
          <button
            style={{ backgroundColor: "#d79a88" }}
            onClick={submitBtn}
            disabled={isScanning}
            className="p-5 rounded-full border text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
          >
            SUBMIT
          </button>
          <button onClick={resetBtn} className="p-5 rounded-full border cursor-pointer">
            RESET
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center max-w-[550px]">
          This tool checks against a general reference list and is not a substitute for professional
          dermatological advice or a substitute for reading the actual product label. An ingredient not listed
          here isn't guaranteed to be safe for every skin type, and evidence levels reflect general research,
          not a guarantee of results for any specific product or concentration.
        </p>
      </div>

      {pendingImageUrl && (
        <LabelCropModal
          imageUrl={pendingImageUrl}
          onConfirm={handleCropConfirm}
          onCancel={handleCropCancel}
        />
      )}
    </div>
  );
};

export default Cheker;
