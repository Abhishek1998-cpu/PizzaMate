import * as SecureStore from 'expo-secure-store';

const KEY = 'favorite_recipe_slugs_v1';

function safeParseArray(v: string | null): string[] {
  if (!v) return [];
  try {
    const parsed = JSON.parse(v);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x) => typeof x === 'string');
  } catch {
    return [];
  }
}

async function getAll(): Promise<string[]> {
  try {
    const raw = await SecureStore.getItemAsync(KEY);
    return safeParseArray(raw);
  } catch {
    return [];
  }
}

async function setAll(slugs: string[]) {
  try {
    const uniq = Array.from(new Set(slugs));
    await SecureStore.setItemAsync(KEY, JSON.stringify(uniq));
  } catch {
    // ignore
  }
}

export async function isRecipeFavorited(slug: string): Promise<boolean> {
  const all = await getAll();
  return all.includes(slug);
}

export async function toggleRecipeFavorite(slug: string): Promise<boolean> {
  const all = await getAll();
  const next = all.includes(slug) ? all.filter((s) => s !== slug) : [...all, slug];
  await setAll(next);
  return next.includes(slug);
}

export async function getFavoriteRecipeSlugs(): Promise<string[]> {
  return await getAll();
}

