import { useState } from "react";
import { checkIngredients, type CheckResults } from "../../lib/ingredientChecker";

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

const Cheker = () => {
  const [input, setInput] = useState<string>("");
  const [results, setResults] = useState<CheckResults | null>(null);

  const submitBtn = () => {
    if (!input.trim()) return;
    setResults(checkIngredients(input));
  };

  const resetBtn = () => {
    setInput("");
    setResults(null);
  };

  const hasAnyMatch = !!results && (results.avoidMatches.length > 0 || results.infoMatches.length > 0);

  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="p-15 flex flex-col justify-center items-center gap-5 max-w-[700px]">
        <div>
          <h1 className="text-5xl text-center md:text-left">Ingredient Checker</h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-2xl">Your Ingredients</h1>
          <h1 className="text-xl">
            Add your ingredients below (separated by commas or new lines) to check for known pore-clogging
            ingredients and see evidence-based info on recognized active ingredients.
          </h1>
        </div>
        <div className="w-full">
          <label htmlFor="cheker" className="sr-only">Ingredient list</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="cheker"
            id="cheker"
            placeholder="e.g. Water, Organic Coconut Oil, Niacinamide, Glycerin, Retinol..."
            className="w-full h-40 border hover:border-black transition-colors  duration-300 rounded-lg p-2"
          ></textarea>
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
            className="p-5 rounded-full border text-white cursor-pointer"
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
    </div>
  );
};

export default Cheker;
