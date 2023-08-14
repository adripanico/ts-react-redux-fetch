import { use } from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import EN from './en.json';
import ES from './es.json';

export const LOCAL_STORAGE_I18N__KEY = 'lang';

export const DEFAULT_LANGUAGE = 'en-US';

export const LANGUAGES = [
  { label: 'Español', code: 'es-ES' },
  { label: 'English', code: 'en-US' },
] as const;

void use(i18nextBrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EN,
      },
      es: {
        translation: ES,
      },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LOCAL_STORAGE_I18N__KEY,
    },
    interpolation: { escapeValue: false }, // not needed for react as it escapes by default
  });
