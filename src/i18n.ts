import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import en from '../locales/en.json';
import pt from '../locales/pt.json';

const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'pt',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
