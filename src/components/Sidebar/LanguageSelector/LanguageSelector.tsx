import { changeLanguage } from 'i18next';
import { useEffect, useState } from 'react';

import { DEFAULT_LANGUAGE, LANGUAGES, LOCAL_STORAGE_I18N__KEY } from 'i18n/i18n';

import styles from './LanguageSelector.module.scss';

export const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem(LOCAL_STORAGE_I18N__KEY) || DEFAULT_LANGUAGE
  );

  useEffect(() => {
    void changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <select
      className={styles.languageSelector}
      onChange={(e) => setCurrentLanguage(e.currentTarget.value)}
      defaultValue={currentLanguage}
    >
      {LANGUAGES.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};
