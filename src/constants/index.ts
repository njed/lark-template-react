/**
 * 应用常量
 */

export const APP_NAME = 'Lark Template';

export const API_ENDPOINTS = {
  users: '/users',
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
} as const;

export const ROUTES = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  notFound: '/404',
} as const;

export const STORAGE_KEYS = {
  token: 'auth_token',
  user: 'user_info',
  theme: 'theme',
  locale: 'i18nextLng',
} as const;

export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

export const RTL_LANGUAGES = ['ar'] as const;