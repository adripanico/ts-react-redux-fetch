import { ThemeSwitcher } from 'shared/ThemeSwitcher/ThemeSwitcher';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" height={56} />
      <ThemeSwitcher />
    </header>
  );
};
