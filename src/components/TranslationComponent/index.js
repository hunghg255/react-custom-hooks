import { useTranslation } from '../../hooks/useTranslation';

const TranslationComponent = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <>
      <div>{language}</div>
      <div>{t('hi')}</div>
      <div>{t('bye')}</div>
      <div>{t('nested.value')}</div>
      <button onClick={() => setLanguage('sp')}>Change to spanish</button>
      <button onClick={() => setLanguage('en')}>Change to English</button>
      <button onClick={() => setFallbackLanguage('sp')}>Change FB Lang</button>
    </>
  );
};

export default TranslationComponent;
