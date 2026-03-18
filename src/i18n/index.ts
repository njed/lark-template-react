import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enErrors from './locales/en/errors.json';
import zhCNCommon from './locales/zh-CN/common.json';
import zhCNHome from './locales/zh-CN/home.json';
import zhCNErrors from './locales/zh-CN/errors.json';
import zhTWCommon from './locales/zh-TW/common.json';
import zhTWHome from './locales/zh-TW/home.json';
import zhTWErrors from './locales/zh-TW/errors.json';
import jaCommon from './locales/ja/common.json';
import jaHome from './locales/ja/home.json';
import jaErrors from './locales/ja/errors.json';
import arCommon from './locales/ar/common.json';
import arHome from './locales/ar/home.json';
import arErrors from './locales/ar/errors.json';

import { DEFAULT_LANGUAGE, type LanguageCode } from './config/languages';

const resources = {
  en: {
    common: enCommon,
    home: enHome,
    errors: enErrors,
  },
  'zh-CN': {
    common: zhCNCommon,
    home: zhCNHome,
    errors: zhCNErrors,
  },
  'zh-TW': {
    common: zhTWCommon,
    home: zhTWHome,
    errors: zhTWErrors,
  },
  ja: {
    common: jaCommon,
    home: jaHome,
    errors: jaErrors,
  },
  ar: {
    common: arCommon,
    home: arHome,
    errors: arErrors,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ['en', 'zh-CN', 'zh-TW', 'ja', 'ar'] as LanguageCode[],
    ns: ['common', 'home', 'errors'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
  });

export default i18n;