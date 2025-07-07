// src/utils/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en/translation.json';
import pt from '../locales/pt/translation.json';
import es from '../locales/es/translation.json';

const resources = {
  en: { translation: en },
  pt: { translation: pt },
  es: { translation: es },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
