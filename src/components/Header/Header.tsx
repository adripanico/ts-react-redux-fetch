import { ThemeSwitcher } from 'shared/ThemeSwitcher/ThemeSwitcher';

import logo from './logo.png';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} height={56} alt="Rick and Morty logo" />
      <ThemeSwitcher />
    </header>
  );
};
