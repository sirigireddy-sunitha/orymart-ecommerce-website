
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import ja from './locales/ja.json';
import zh from './locales/zh.json';
import de from './locales/de.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import ko from './locales/ko.json';
import pt from './locales/pt.json';
import ar from './locales/ar.json';
import he from './locales/he.json';
import th from './locales/th.json';
import vi from './locales/vi.json';

const resources = {
  en: { translation: en },
  ja: { translation: ja },
  zh: { translation: zh },
  de: { translation: de },
  fr: { translation: fr },
  es: { translation: es },
  ko: { translation: ko },
  pt: { translation: pt },
  ar: { translation: ar },
  he: { translation: he },
  th: { translation: th },
  vi: { translation: vi },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'language',
      caches: ['localStorage'],
    },
  });

export default i18n;
