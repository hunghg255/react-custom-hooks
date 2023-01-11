import { useLocalStorage } from './useSessionStorage';
import * as translations from './translations';

const getNestedTranslation = (language, keys) => {
  return keys.reduce((acc, key) => {
    return acc?.[key];
  }, translations[language]);
};

const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
    'fallbackLanguage',
    'en'
  );

  const translate = (key) => {
    const keys = key.split('.');

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};

export { useTranslation };
