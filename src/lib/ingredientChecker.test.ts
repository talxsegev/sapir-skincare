import { describe, expect, it } from "vitest";
import { findAcneCausingIngredients, normalize } from "./ingredientChecker";

describe("normalize", () => {
  it("lowercases, trims, and strips non-letters", () => {
    expect(normalize("  Coconut Oil  ")).toBe("coconutoil");
    expect(normalize("D&C Red #17")).toBe("dcred");
  });
});

describe("findAcneCausingIngredients", () => {
  it("finds known acne-causing ingredients in a comma-separated list", () => {
    const result = findAcneCausingIngredients("Water, Coconut Oil, Glycerin, Mineral Oil");
    expect(result).toEqual(["Coconut Oil", "Mineral Oil"]);
  });

  it("finds known acne-causing ingredients in a newline-separated list", () => {
    const result = findAcneCausingIngredients("Water\nLanolin\nGlycerin");
    expect(result).toEqual(["Lanolin"]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(findAcneCausingIngredients("Water, Glycerin, Aloe Vera")).toEqual([]);
  });

  it("returns an empty array for empty input", () => {
    expect(findAcneCausingIngredients("")).toEqual([]);
    expect(findAcneCausingIngredients("   ")).toEqual([]);
  });

  it("does not duplicate a matched ingredient listed twice", () => {
    const result = findAcneCausingIngredients("Coconut Oil, Water, Coconut Oil");
    expect(result).toEqual(["Coconut Oil"]);
  });

  it("matches regardless of case or punctuation variations", () => {
    const result = findAcneCausingIngredients("COCONUT OIL");
    expect(result).toEqual(["COCONUT OIL"]);
  });
});
