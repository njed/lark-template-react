import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import i18n from '@/i18n';
import {
  isRTL,
  DEFAULT_LANGUAGE,
  type LanguageCode,
  type Language,
  SUPPORTED_LANGUAGES,
} from '@/i18n/config/languages';

interface LocaleState {
  locale: LanguageCode;
  direction: 'ltr' | 'rtl';
  setLocale: (locale: LanguageCode) => void;
  getLanguage: () => Language;
}

export const useLocaleStore = create<LocaleState>()(
  devtools(
    persist(
      (set, get) => ({
        locale: DEFAULT_LANGUAGE,
        direction: isRTL(DEFAULT_LANGUAGE) ? 'rtl' : 'ltr',
        setLocale: (locale: LanguageCode) => {
          const direction = isRTL(locale) ? 'rtl' : 'ltr';
          i18n.changeLanguage(locale);
          set({ locale, direction });

          // 更新 HTML 元素的 lang 和 dir 属性
          document.documentElement.lang = locale;
          document.documentElement.dir = direction;
        },
        getLanguage: () => {
          return SUPPORTED_LANGUAGES[get().locale];
        },
      }),
      {
        name: 'locale-storage',
        partialize: (state) => ({ locale: state.locale }),
      }
    ),
    { name: 'LocaleStore' }
  )
);