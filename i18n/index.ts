import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as SecureStore from 'expo-secure-store';

import { en } from './en';
import { hi } from './hi';
import { fr } from './fr';
import { es } from './es';
import { ur } from './ur';

export type SupportedLanguage = 'en' | 'hi' | 'fr' | 'es' | 'ur';

const STORAGE_KEY = 'pizzamate.language';

function normalizeLangTag(tag: string): SupportedLanguage {
  // Expo can return "en-US", "hi-IN", etc.
  const base = tag.split('-')[0]?.toLowerCase();
  if (base === 'hi') return 'hi';
  if (base === 'fr') return 'fr';
  if (base === 'es') return 'es';
  if (base === 'ur') return 'ur';
  return 'en';
}

export async function getStoredLanguage(): Promise<SupportedLanguage | null> {
  const stored = await SecureStore.getItemAsync(STORAGE_KEY);
  if (stored === 'en' || stored === 'hi' || stored === 'fr' || stored === 'es' || stored === 'ur') return stored;
  return null;
}

export async function setStoredLanguage(lang: SupportedLanguage) {
  await SecureStore.setItemAsync(STORAGE_KEY, lang);
}

export async function initI18n() {
  if (i18n.isInitialized) return i18n;

  const stored = await getStoredLanguage();
  const device = normalizeLangTag(Localization.getLocales?.()[0]?.languageTag ?? 'en');
  const lng = stored ?? device ?? 'en';

  await i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        hi: { translation: hi },
        fr: { translation: fr },
        es: { translation: es },
        ur: { translation: ur },
      },
      lng,
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      returnNull: false,
      compatibilityJSON: 'v4',
    });

  return i18n;
}

export async function changeLanguage(lang: SupportedLanguage) {
  await setStoredLanguage(lang);
  await i18n.changeLanguage(lang);
}

export { i18n };

