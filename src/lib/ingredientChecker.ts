import Words from "../components_test/ServicePageComponents/Words.json";

const acneCausingIngredients = Array.from(
  new Set(Words.words.map((w) => normalize(w)))
).sort((a, b) => b.length - a.length); // longest first: prefer the most specific match

export function normalize(ingredient: string) {
  return ingredient.trim().toLowerCase().replace(/[^a-z]/g, "");
}

export interface IngredientCheckResult {
  /** The ingredient exactly as the user typed it. */
  ingredient: string;
  /** The dictionary entry it matched against (e.g. "coconut oil"), for reference. */
  matchedOn: string;
}

/**
 * Splits a free-text ingredient list (comma or newline separated) and checks
 * each entry against a list of ingredients commonly flagged as acne-causing
 * or pore-clogging. Matching is substring-based (not exact-match) so real
 * INCI labels with extra qualifiers -- "Organic Coconut Oil", "Virgin Argan
 * Oil (Cold Pressed)" -- are still caught even though they don't reduce to
 * exactly the dictionary entry.
 */
export function findAcneCausingIngredients(input: string): IngredientCheckResult[] {
  const ingredients = input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const results: IngredientCheckResult[] = [];
  const seen = new Set<string>();

  for (const ingredient of ingredients) {
    const normalized = normalize(ingredient);
    if (!normalized || seen.has(normalized)) continue;

    const matchedOn = acneCausingIngredients.find((entry) => normalized.includes(entry));
    if (matchedOn) {
      results.push({ ingredient, matchedOn });
      seen.add(normalized);
    }
  }

  return results;
}

export function countIngredients(input: string): number {
  return input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean).length;
}
