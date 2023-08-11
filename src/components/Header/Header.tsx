import { Sidebar } from 'components/Sidebar/Sidebar';
import { Logo } from 'shared/Logo/Logo';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Sidebar />
      <Logo />
    </header>
  );
};
