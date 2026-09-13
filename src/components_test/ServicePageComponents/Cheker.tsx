import { useState } from "react";
import { countIngredients, findAcneCausingIngredients, type IngredientCheckResult } from "../../lib/ingredientChecker";

const Cheker = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<"matches" | "clear" | null>(null);
  const [matches, setMatches] = useState<IngredientCheckResult[]>([]);
  const [checkedCount, setCheckedCount] = useState(0);

  const submitBtn = () => {
    if (!input.trim()) return;

    const found = findAcneCausingIngredients(input);
    setMatches(found);
    setCheckedCount(countIngredients(input));
    setResult(found.length > 0 ? "matches" : "clear");
  };

  const resetBtn = () => {
    setInput("");
    setMatches([]);
    setCheckedCount(0);
    setResult(null);
  };

  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="p-15 flex flex-col justify-center items-center gap-5 max-w-[700px]">
        <div>
          <h1 className="text-5xl text-center md:text-left">Acne Ingredient Checker</h1>
        </div>
        <div className="flex flex-col text-center gap-2">
          <h1 className="text-2xl">Your Ingredients</h1>
          <h1 className="text-xl">
            Add your ingredients below (separated by commas or new lines) to see if any are known to cause acne.
          </h1>
        </div>
        <div className="w-full">
          <label htmlFor="cheker" className="sr-only">Ingredient list</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name="cheker"
            id="cheker"
            placeholder="e.g. Water, Organic Coconut Oil, Glycerin, Shea Butter..."
            className="w-full h-40 border hover:border-black transition-colors  duration-300 rounded-lg p-2"
          ></textarea>
        </div>

        <div className="w-full min-h-[100px]" role="status" aria-live="polite">
          {result === "matches" ? (
            <div className="w-full flex flex-col gap-3">
              <h3 className="font-bold text-lg text-red-600">
                Found {matches.length} ingredient{matches.length > 1 ? "s" : ""} known to potentially cause acne, out of {checkedCount} checked:
              </h3>
              <ul className="flex flex-wrap gap-2">
                {matches.map((m, index) => (
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
          ) : result === "clear" ? (
            <p className="font-bold">
              Good news — none of the {checkedCount} ingredient{checkedCount > 1 ? "s" : ""} you listed matched our list of known acne-causing ingredients.
            </p>
          ) : null}
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

        <p className="text-xs text-gray-500 text-center max-w-[500px]">
          This tool checks against a general reference list of ingredients commonly associated with clogged
          pores, and isn't a substitute for professional dermatological advice. An ingredient not listed here
          isn't guaranteed to be safe for every skin type.
        </p>
      </div>
    </div>
  );
};

export default Cheker;
