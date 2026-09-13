import ingredientsData from "../data/ingredients.json";

export interface IngredientRecord {
  name: string;
  aliases: string[];
  /** "avoid" = known pore-clogging/irritant ingredient with no further detail; "info" = a recognized active with evidence-based detail. */
  type: "avoid" | "info";
  category: string | null;
  concernTags: string[];
  benefits: string | null;
  risks: string | null;
  evidenceLevel: string | null;
  allergyRisk: string | null;
  photosensitivity: string | null;
  pregnancyNote: string | null;
  comedogenicityNote: string | null;
  professionalWarning: string | null;
  prescriptionOnly: boolean;
}

export interface InteractionRecord {
  ingredientA: string;
  ingredientB: string;
  riskLevel: string;
  interactionType: string;
  userMessage: string;
}

export interface MatchResult {
  /** The ingredient exactly as the user typed it. */
  ingredient: string;
  /** The canonical ingredient name it matched against. */
  matchedOn: string;
  record: IngredientRecord;
}

export interface CheckResults {
  avoidMatches: MatchResult[];
  infoMatches: MatchResult[];
  interactions: InteractionRecord[];
  checkedCount: number;
}

const allIngredients = ingredientsData.ingredients as IngredientRecord[];
const allInteractions = ingredientsData.interactions as InteractionRecord[];

export function normalize(ingredient: string) {
  return ingredient.trim().toLowerCase().replace(/[^a-z]/g, "");
}

interface Candidate {
  term: string;
  record: IngredientRecord;
}

// Longest term first, so a more specific match (e.g. "cocos nucifera oil")
// is preferred over a shorter one that happens to also be a substring.
const candidates: Candidate[] = allIngredients
  .flatMap((record) => [record.name, ...record.aliases].map((term) => ({ term: normalize(term), record })))
  .filter((c) => c.term.length > 0)
  .sort((a, b) => b.term.length - a.term.length);

export function countIngredients(input: string): number {
  return input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean).length;
}

/**
 * Splits a free-text ingredient list (comma or newline separated) and checks
 * each entry against a merged dataset of (a) ingredients commonly flagged as
 * acne-causing/pore-clogging, and (b) recognized active ingredients with
 * evidence-based benefit/risk information. Matching is substring-based (not
 * exact-match) so real INCI labels with extra qualifiers -- "Organic Coconut
 * Oil", "Virgin Argan Oil (Cold Pressed)" -- are still caught even though
 * they don't reduce to exactly the dictionary entry.
 */
export function checkIngredients(input: string): CheckResults {
  const ingredients = input
    .split(/[,\n]/)
    .map((s) => s.trim())
    .filter(Boolean);

  const avoidMatches: MatchResult[] = [];
  const infoMatches: MatchResult[] = [];
  const seen = new Set<string>();

  for (const ingredient of ingredients) {
    const normalized = normalize(ingredient);
    if (!normalized || seen.has(normalized)) continue;

    const hit = candidates.find((c) => normalized.includes(c.term));
    if (!hit) continue;
    seen.add(normalized);

    const result: MatchResult = { ingredient, matchedOn: hit.record.name, record: hit.record };
    if (hit.record.type === "avoid") {
      avoidMatches.push(result);
    } else {
      infoMatches.push(result);
    }
  }

  const matchedInfoNames = new Set(infoMatches.map((m) => m.record.name));
  const interactions = allInteractions.filter(
    (it) => matchedInfoNames.has(it.ingredientA) && matchedInfoNames.has(it.ingredientB)
  );

  return { avoidMatches, infoMatches, interactions, checkedCount: ingredients.length };
}
