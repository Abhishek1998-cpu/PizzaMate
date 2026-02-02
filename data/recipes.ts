import { recipesBase } from "./recipes.base";
import { recipesI18nEn, type RecipeI18n } from "./recipes.i18n.en";
import { recipesI18nEs } from "./recipes.i18n.es";
import { recipesI18nFr } from "./recipes.i18n.fr";
import { recipesI18nHi } from "./recipes.i18n.hi";
import { recipesI18nUr } from "./recipes.i18n.ur";

export type SupportedRecipeLanguage = "en" | "hi" | "fr" | "es" | "ur";
export type LocalizedString = Record<SupportedRecipeLanguage, string>;

export type CookingStep = {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  description: LocalizedString;
  image: string;
  durationSeconds?: number;
};

export type Ingredient = {
  id: string;
  name: LocalizedString;
  image: string;
};

export type ChecklistItem = {
  id: string;
  label: LocalizedString;
  subtitle?: LocalizedString;
  icon: string;
  checked?: boolean;
};

export type Recipe = {
  id: string; // unique 3-digit id, e.g. "001"
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  duration: LocalizedString;
  method: LocalizedString;
  level: LocalizedString;
  levelColor: string;
  levelIcon: string;
  image: string;
  rating: string;
  badge: LocalizedString;
  time: LocalizedString;
  toolsText: LocalizedString;
  hero: string;
  diet: "veg" | "non-veg";
  ingredients: Ingredient[];
  steps: CookingStep[];
  prepTools: ChecklistItem[];
  prepIngredients: ChecklistItem[];
  helpMeChoose?: {
    match?: string | null;
    highlight?: boolean;
  };
};

function safeGetRecipeI18n(
  map: Record<string, RecipeI18n>,
  slug: string
): RecipeI18n | undefined {
  return map[slug];
}

function mkLocalizedString(slug: string, pick: (r: RecipeI18n) => string): LocalizedString {
  const en = safeGetRecipeI18n(recipesI18nEn, slug);
  if (!en) throw new Error(`recipes i18n: missing en for "${slug}"`);
  const hi = safeGetRecipeI18n(recipesI18nHi, slug) ?? en;
  const fr = safeGetRecipeI18n(recipesI18nFr, slug) ?? en;
  const es = safeGetRecipeI18n(recipesI18nEs, slug) ?? en;
  const ur = safeGetRecipeI18n(recipesI18nUr, slug) ?? en;
  return {
    en: pick(en),
    hi: pick(hi),
    fr: pick(fr),
    es: pick(es),
    ur: pick(ur),
  };
}

function mkMapLocalizedString(
  slug: string,
  pickMap: (r: RecipeI18n) => Record<string, string>,
  key: string,
  fallback: string
): LocalizedString {
  const en = safeGetRecipeI18n(recipesI18nEn, slug);
  if (!en) throw new Error(`recipes i18n: missing en for "${slug}"`);
  const hi = safeGetRecipeI18n(recipesI18nHi, slug) ?? en;
  const fr = safeGetRecipeI18n(recipesI18nFr, slug) ?? en;
  const es = safeGetRecipeI18n(recipesI18nEs, slug) ?? en;
  const ur = safeGetRecipeI18n(recipesI18nUr, slug) ?? en;

  const enVal = pickMap(en)[key] ?? fallback;
  const hiVal = pickMap(hi)[key] ?? enVal;
  const frVal = pickMap(fr)[key] ?? enVal;
  const esVal = pickMap(es)[key] ?? enVal;
  const urVal = pickMap(ur)[key] ?? enVal;
  return { en: enVal, hi: hiVal, fr: frVal, es: esVal, ur: urVal };
}

export const recipes: Recipe[] = recipesBase.map((base) => {
  const slug = base.slug;

  return {
    id: base.id,
    slug,
    title: mkLocalizedString(slug, (r) => r.title),
    description: mkLocalizedString(slug, (r) => r.description),
    duration: mkLocalizedString(slug, (r) => r.duration),
    method: mkLocalizedString(slug, (r) => r.method),
    level: mkLocalizedString(slug, (r) => r.level),
    badge: mkLocalizedString(slug, (r) => r.badge),
    time: mkLocalizedString(slug, (r) => r.time),
    toolsText: mkLocalizedString(slug, (r) => r.toolsText),

    levelColor: base.levelColor,
    levelIcon: base.levelIcon,
    image: base.image,
    hero: base.hero,
    diet: base.diet,
    rating: base.rating,
    helpMeChoose: base.helpMeChoose,

    ingredients: base.ingredients.map((ing) => ({
      id: ing.id,
      image: ing.image,
      name: mkMapLocalizedString(slug, (r) => r.ingredients, ing.id, ing.id),
    })),

    prepTools: base.prepTools.map((t) => ({
      id: t.id,
      icon: t.icon,
      label: mkMapLocalizedString(slug, (r) => {
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(r.prepTools)) out[k] = v.label;
        return out;
      }, t.id, t.id),
    })),

    prepIngredients: base.prepIngredients.map((i) => {
      const label = mkMapLocalizedString(slug, (r) => {
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(r.prepIngredients)) out[k] = v.label;
        return out;
      }, i.id, i.id);

      const subtitle = (() => {
        const en = safeGetRecipeI18n(recipesI18nEn, slug);
        if (!en) return undefined;
        const hasAny = en.prepIngredients[i.id]?.subtitle != null;
        if (!hasAny) return undefined;
        const fallback = en.prepIngredients[i.id]?.subtitle ?? "";
        return mkMapLocalizedString(
          slug,
          (r) => {
            const out: Record<string, string> = {};
            for (const [k, v] of Object.entries(r.prepIngredients))
              if (v.subtitle != null) out[k] = v.subtitle;
            return out;
          },
          i.id,
          fallback
        );
      })();

      return {
        id: i.id,
        icon: i.icon,
        label,
        subtitle,
      };
    }),

    steps: base.steps.map((s) => ({
      id: s.id,
      image: s.image,
      durationSeconds: s.durationSeconds,
      title: mkMapLocalizedString(slug, (r) => {
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(r.steps)) out[k] = v.title;
        return out;
      }, s.id, s.id),
      subtitle: mkMapLocalizedString(slug, (r) => {
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(r.steps)) out[k] = v.subtitle;
        return out;
      }, s.id, s.id),
      description: mkMapLocalizedString(slug, (r) => {
        const out: Record<string, string> = {};
        for (const [k, v] of Object.entries(r.steps)) out[k] = v.description;
        return out;
      }, s.id, s.id),
    })),
  };
});

function assertNonEmptyString(value: unknown, label: string) {
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(
      `recipes validation: "${label}" must be a non-empty string`
    );
  }
}

function assertLocalizedString(value: unknown, label: string) {
  const v = value as LocalizedString;
  if (!v || typeof v !== "object") {
    throw new Error(`recipes validation: "${label}" must be a LocalizedString`);
  }
  for (const k of ["en", "hi", "fr", "es", "ur"] as const) {
    assertNonEmptyString(v[k], `${label}.${k}`);
  }
}

function assertNonEmptyArray(value: unknown, label: string) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`recipes validation: "${label}" must be a non-empty array`);
  }
}

function assertUnique(items: string[], label: string) {
  const set = new Set(items);
  if (set.size !== items.length) {
    throw new Error(`recipes validation: "${label}" contains duplicates`);
  }
}

function containsEggText(value: string) {
  // "egg" should not match "veggie" etc.
  return /\begg(s)?\b/i.test(value) || /\b(अंडा|अंडे)\b/i.test(value);
}

function validateRecipes(all: Recipe[]) {
  assertNonEmptyArray(all, "recipes");
  assertUnique(
    all.map((r) => r.slug),
    "recipes[].slug"
  );
  assertUnique(
    all.map((r) => r.id),
    "recipes[].id"
  );

  for (const r of all) {
    // Core display + routing
    assertNonEmptyString(r.id, `recipe(${r.slug}).id`);
    assertNonEmptyString(r.slug, `recipe(${r.slug}).slug`);
    assertLocalizedString(r.title, `recipe(${r.slug}).title`);
    assertLocalizedString(r.description, `recipe(${r.slug}).description`);
    assertLocalizedString(r.duration, `recipe(${r.slug}).duration`);
    assertLocalizedString(r.time, `recipe(${r.slug}).time`);
    assertLocalizedString(r.method, `recipe(${r.slug}).method`);
    assertLocalizedString(r.level, `recipe(${r.slug}).level`);
    assertNonEmptyString(r.levelColor, `recipe(${r.slug}).levelColor`);
    assertNonEmptyString(r.levelIcon, `recipe(${r.slug}).levelIcon`);
    assertNonEmptyString(r.image, `recipe(${r.slug}).image`);
    assertNonEmptyString(r.hero, `recipe(${r.slug}).hero`);
    assertNonEmptyString(r.rating, `recipe(${r.slug}).rating`);
    assertLocalizedString(r.badge, `recipe(${r.slug}).badge`);
    assertLocalizedString(r.toolsText, `recipe(${r.slug}).toolsText`);
    if (r.diet !== "veg" && r.diet !== "non-veg") {
      throw new Error(
        `recipes validation: recipe(${r.slug}).diet must be "veg" or "non-veg"`
      );
    }

    // Arrays used across flows
    assertNonEmptyArray(r.ingredients, `recipe(${r.slug}).ingredients`);
    assertNonEmptyArray(r.steps, `recipe(${r.slug}).steps`);
    assertNonEmptyArray(r.prepTools, `recipe(${r.slug}).prepTools`);
    assertNonEmptyArray(r.prepIngredients, `recipe(${r.slug}).prepIngredients`);

    // Ingredients
    assertUnique(
      r.ingredients.map((ing) => ing.id),
      `recipe(${r.slug}).ingredients[].id`
    );
    const hasEgg =
      r.ingredients.some((ing) =>
        Object.values(ing.name).some((s) => containsEggText(s))
      ) ||
      r.prepIngredients.some((i) =>
        Object.values(i.label).some((s) => containsEggText(s))
      );
    if (hasEgg && r.diet === "veg") {
      throw new Error(
        `recipes validation: recipe(${r.slug}) contains egg, so diet must be "non-veg"`
      );
    }

    for (const ing of r.ingredients) {
      assertNonEmptyString(ing.id, `recipe(${r.slug}).ingredients[].id`);
      assertLocalizedString(ing.name, `recipe(${r.slug}).ingredients[].name`);
      assertNonEmptyString(ing.image, `recipe(${r.slug}).ingredients[].image`);
    }

    // Steps
    assertUnique(
      r.steps.map((s) => s.id),
      `recipe(${r.slug}).steps[].id`
    );
    for (const s of r.steps) {
      assertNonEmptyString(s.id, `recipe(${r.slug}).steps[].id`);
      assertLocalizedString(s.title, `recipe(${r.slug}).steps[].title`);
      assertLocalizedString(s.subtitle, `recipe(${r.slug}).steps[].subtitle`);
      assertLocalizedString(
        s.description,
        `recipe(${r.slug}).steps[].description`
      );
      assertNonEmptyString(s.image, `recipe(${r.slug}).steps[].image`);
      if (s.durationSeconds != null) {
        if (typeof s.durationSeconds !== "number" || s.durationSeconds <= 0) {
          throw new Error(
            `recipes validation: recipe(${r.slug}).steps(${s.id}).durationSeconds must be a positive number`
          );
        }
      }
    }

    // Prep items
    assertUnique(
      r.prepTools.map((t) => t.id),
      `recipe(${r.slug}).prepTools[].id`
    );
    assertUnique(
      r.prepIngredients.map((i) => i.id),
      `recipe(${r.slug}).prepIngredients[].id`
    );
    for (const t of r.prepTools) {
      assertNonEmptyString(t.id, `recipe(${r.slug}).prepTools[].id`);
      assertLocalizedString(t.label, `recipe(${r.slug}).prepTools[].label`);
      assertNonEmptyString(t.icon, `recipe(${r.slug}).prepTools[].icon`);
    }
    for (const i of r.prepIngredients) {
      assertNonEmptyString(i.id, `recipe(${r.slug}).prepIngredients[].id`);
      assertLocalizedString(
        i.label,
        `recipe(${r.slug}).prepIngredients[].label`
      );
      assertNonEmptyString(i.icon, `recipe(${r.slug}).prepIngredients[].icon`);
      if (i.subtitle != null)
        assertLocalizedString(
          i.subtitle,
          `recipe(${r.slug}).prepIngredients[].subtitle`
        );
    }
  }
}

// Catch broken/partial recipe objects early during development.
// (No overhead in production builds.)
// eslint-disable-next-line no-undef
if (typeof __DEV__ !== "undefined" && __DEV__) {
  validateRecipes(recipes);
}

export const recipeBySlug = Object.fromEntries(
  recipes.map((recipe) => [recipe.slug, recipe])
) as Record<string, Recipe>;

export const defaultRecipeSlug = "spicy-paneer-tikka";
