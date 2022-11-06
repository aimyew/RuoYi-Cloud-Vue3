import Cookies from 'js-cookie'
import { createI18n } from 'vue-i18n'
import enLocale from './en'
import zhLocale from './zh'

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' },
];
const defaultLocale = Cookies.get('locale') || 'zh';

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: 'en-US',
  allowComposition: true,
  messages: {
    'en-US': enLocale,
    'zh-CN': zhLocale,
  },
});

export default i18n;
