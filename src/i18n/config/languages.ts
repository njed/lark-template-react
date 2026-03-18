/**
 * 语言配置
 */

export type LanguageCode = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ar';

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

/**
 * RTL 语言列表
 */
export const RTL_LANGUAGES: LanguageCode[] = ['ar'];

/**
 * 判断是否为 RTL 语言
 */
export const isRTL = (lang: string): boolean => {
  return RTL_LANGUAGES.includes(lang as LanguageCode);
};

/**
 * 支持的语言
 */
export const SUPPORTED_LANGUAGES: Record<LanguageCode, Language> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
  },
  'zh-CN': {
    code: 'zh-CN',
    name: 'Chinese Simplified',
    nativeName: '简体中文',
    dir: 'ltr',
  },
  'zh-TW': {
    code: 'zh-TW',
    name: 'Chinese Traditional',
    nativeName: '繁體中文',
    dir: 'ltr',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    dir: 'ltr',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
  },
};

/**
 * 默认语言
 */
export const DEFAULT_LANGUAGE: LanguageCode = 'zh-CN';

/**
 * 获取语言配置
 */
export const getLanguage = (code: string): Language | undefined => {
  return SUPPORTED_LANGUAGES[code as LanguageCode];
};