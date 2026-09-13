import { describe, expect, it } from "vitest";
import { countIngredients, findAcneCausingIngredients, normalize } from "./ingredientChecker";

describe("normalize", () => {
  it("lowercases, trims, and strips non-letters", () => {
    expect(normalize("  Coconut Oil  ")).toBe("coconutoil");
    expect(normalize("D&C Red #17")).toBe("dcred");
  });
});

describe("findAcneCausingIngredients", () => {
  it("finds known acne-causing ingredients in a comma-separated list", () => {
    const result = findAcneCausingIngredients("Water, Coconut Oil, Glycerin, Mineral Oil");
    expect(result.map((r) => r.ingredient)).toEqual(["Coconut Oil", "Mineral Oil"]);
  });

  it("finds known acne-causing ingredients in a newline-separated list", () => {
    const result = findAcneCausingIngredients("Water\nLanolin\nGlycerin");
    expect(result.map((r) => r.ingredient)).toEqual(["Lanolin"]);
  });

  it("matches real-world labels with extra qualifier words around a known ingredient", () => {
    const result = findAcneCausingIngredients("Organic Coconut Oil, Virgin Argan Oil (Cold Pressed), Water");
    expect(result.map((r) => r.ingredient)).toEqual([
      "Organic Coconut Oil",
      "Virgin Argan Oil (Cold Pressed)",
    ]);
    expect(result[0].matchedOn).toBe("coconutoil");
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
    expect(result.map((r) => r.ingredient)).toEqual(["Coconut Oil"]);
  });

  it("matches regardless of case or punctuation variations", () => {
    const result = findAcneCausingIngredients("COCONUT OIL");
    expect(result.map((r) => r.ingredient)).toEqual(["COCONUT OIL"]);
  });
});

describe("countIngredients", () => {
  it("counts comma/newline separated, non-empty entries", () => {
    expect(countIngredients("Water, Glycerin,\nShea Butter")).toBe(3);
    expect(countIngredients("")).toBe(0);
    expect(countIngredients("  , , \n ")).toBe(0);
  });
});
