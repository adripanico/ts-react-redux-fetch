import { use } from 'i18next';
import i18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import EN from './en.json';
import ES from './es.json';

const LOCAL_STORAGE_I18N__KEY = 'lang';

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
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: LOCAL_STORAGE_I18N__KEY,
    },
    interpolation: { escapeValue: false }, // not needed for react as it escapes by default
  });
