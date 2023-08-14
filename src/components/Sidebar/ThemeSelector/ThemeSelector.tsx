import { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext';

import styles from './ThemeSelector.module.scss';

export const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleTheme} checked={theme === 'light'} />
      <span className={styles.slider}></span>
    </label>
  );
};
