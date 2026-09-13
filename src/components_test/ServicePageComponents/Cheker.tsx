import { useState } from "react";
import { findAcneCausingIngredients } from "../../lib/ingredientChecker";

const Cheker = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<"matches" | "clear" | null>(null);
  const [matchedIngredients, setMatchedIngredients] = useState<string[]>([]);

  const submitBtn = () => {
    if (!input.trim()) return;

    const matches = findAcneCausingIngredients(input);
    setMatchedIngredients(matches);
    setResult(matches.length > 0 ? "matches" : "clear");
  };

  const resetBtn = () => {
    setInput("");
    setMatchedIngredients([]);
    setResult(null);
  };

  return (
    <div className="bg-white p-5 flex flex-col justify-center items-center" style={{ backgroundColor: "rgb(255, 253, 245)" }}>
      <div className="p-15 flex flex-col justify-center items-center gap-5">
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
            placeholder="e.g. Water, Coconut Oil, Glycerin, Shea Butter..."
            className="w-full h-40 border hover:border-black transition-colors  duration-300 rounded-lg p-2"
          ></textarea>
        </div>

        <div className="w-full max-h-[150px] min-h-[150px]" role="status" aria-live="polite">
          {result === "matches" ? (
            <div className="w-full flex flex-col gap-5 max-h-[150px] min-h-[150px] overflow-y-auto overflow-x-hidden">
              <h3 className="font-bold text-xl text-red-600">We found ingredient(s) known to potentially cause acne:</h3>
              <ol className="list-decimal list-inside">
                {matchedIngredients.map((word, index) => (
                  <li key={index} className="font-bold">
                    {word}
                  </li>
                ))}
              </ol>
            </div>
          ) : result === "clear" ? (
            <p className="font-bold">Good news — none of these ingredients matched our list of known acne-causing ingredients.</p>
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
      </div>
    </div>
  );
};

export default Cheker;
