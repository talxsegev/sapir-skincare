import { describe, expect, it } from "vitest";
import { checkIngredients, countIngredients, normalize } from "./ingredientChecker";

describe("normalize", () => {
  it("lowercases, trims, and strips non-alphanumeric characters (keeping digits)", () => {
    expect(normalize("  Coconut Oil  ")).toBe("coconutoil");
    expect(normalize("D&C Red #17")).toBe("dcred17");
  });
});

describe("countIngredients", () => {
  it("counts comma/newline separated, non-empty entries", () => {
    expect(countIngredients("Water, Glycerin,\nShea Butter")).toBe(3);
    expect(countIngredients("")).toBe(0);
    expect(countIngredients("  , , \n ")).toBe(0);
  });
});

describe("checkIngredients", () => {
  it("flags known pore-clogging/acne-causing ingredients as avoid matches", () => {
    const { avoidMatches, checkedCount } = checkIngredients("Water, Coconut Oil, Glycerin, Mineral Oil");
    expect(avoidMatches.map((m) => m.ingredient)).toEqual(["Coconut Oil", "Mineral Oil"]);
    expect(checkedCount).toBe(4);
  });

  it("matches real-world labels with extra qualifier words around a known ingredient", () => {
    const { avoidMatches } = checkIngredients("Organic Coconut Oil, Virgin Argan Oil (Cold Pressed), Water");
    expect(avoidMatches.map((m) => m.ingredient)).toEqual([
      "Organic Coconut Oil",
      "Virgin Argan Oil (Cold Pressed)",
    ]);
  });

  it("recognizes evidence-based active ingredients as info matches, distinct from avoid matches", () => {
    const { infoMatches, avoidMatches } = checkIngredients("Niacinamide, Water, Salicylic Acid");
    expect(infoMatches.map((m) => m.ingredient)).toEqual(["Niacinamide", "Salicylic Acid"]);
    expect(avoidMatches).toEqual([]);
    expect(infoMatches[0].record.evidenceLevel).toBeTruthy();
  });

  it("matches an active ingredient by a common alias, not just its INCI name", () => {
    const { infoMatches } = checkIngredients("Vitamin B3");
    expect(infoMatches.map((m) => m.matchedOn)).toEqual(["Niacinamide"]);
  });

  it("flags prescription-only ingredients distinctly", () => {
    const { infoMatches } = checkIngredients("Tretinoin");
    expect(infoMatches[0].record.prescriptionOnly).toBe(true);
  });

  it("surfaces a known interaction when both interacting ingredients are present", () => {
    const { interactions } = checkIngredients("Retinol, Glycolic Acid");
    expect(interactions.length).toBeGreaterThan(0);
    expect(interactions[0].userMessage).toMatch(/dryness|irritation/i);
  });

  it("does not surface an interaction when only one side is present", () => {
    const { interactions } = checkIngredients("Retinol, Water, Glycerin");
    expect(interactions).toEqual([]);
  });

  it("returns nothing for empty input", () => {
    const result = checkIngredients("");
    expect(result.avoidMatches).toEqual([]);
    expect(result.infoMatches).toEqual([]);
    expect(result.checkedCount).toBe(0);
  });

  it("does not duplicate a matched ingredient listed twice", () => {
    const { avoidMatches } = checkIngredients("Coconut Oil, Water, Coconut Oil");
    expect(avoidMatches.map((m) => m.ingredient)).toEqual(["Coconut Oil"]);
  });

  it("does not flag ingredients that only coincidentally contain a short dictionary word", () => {
    const { avoidMatches } = checkIngredients(
      "Salicornia Herbacea Extract, Olea Europaea (Olive) Fruit Extract, Zea Mays (Corn) Starch, Jojoba Esters, Stearic Acid"
    );
    expect(avoidMatches).toEqual([]);
  });

  it("still flags the real ingredient a false-positive dictionary word is meant for", () => {
    const { avoidMatches } = checkIngredients("Olive Oil, Corn Oil");
    expect(avoidMatches.map((m) => m.ingredient)).toEqual(["Olive Oil", "Corn Oil"]);
  });

  it("distinguishes ingredients that differ only by a number", () => {
    expect(normalize("Polyglyceryl-3 Caprate")).not.toBe(normalize("Polyglyceryl-4 Caprate"));
    const { avoidMatches } = checkIngredients("Polyglyceryl-3 Caprate");
    expect(avoidMatches).toEqual([]);
  });
});
