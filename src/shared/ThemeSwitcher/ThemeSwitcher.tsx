import { useContext } from 'react';

import { ThemeContext } from 'context/ThemeContext';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleTheme} />
      <span className={styles.slider}></span>
    </label>
  );
};
