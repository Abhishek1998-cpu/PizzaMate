import * as SecureStore from 'expo-secure-store';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'pizzamate.themeMode';

export async function getStoredThemeMode(): Promise<ThemeMode | null> {
  const stored = await SecureStore.getItemAsync(STORAGE_KEY);
  if (stored === 'dark' || stored === 'light') return stored;
  return null;
}

export async function setStoredThemeMode(mode: ThemeMode) {
  await SecureStore.setItemAsync(STORAGE_KEY, mode);
}

