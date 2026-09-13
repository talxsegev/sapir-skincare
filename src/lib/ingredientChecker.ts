import Words from "../components_test/ServicePageComponents/Words.json";

const acneCausingIngredients = new Set(
  Words.words.map((w) => normalize(w))
);

export function normalize(ingredient: string) {
  return ingredient.trim().toLowerCase().replace(/[^a-z]/g, "");
}

export function findAcneCausingIngredients(input: string): string[] {
  const ingredients = input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const matches: string[] = [];
  for (const ingredient of ingredients) {
    const normalized = normalize(ingredient);
    if (normalized && acneCausingIngredients.has(normalized) && !matches.includes(ingredient)) {
      matches.push(ingredient);
    }
  }
  return matches;
}
