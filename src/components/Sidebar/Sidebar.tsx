import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useActionOnClickOutside } from 'hooks/useActionOnClickOutside';
import { CloseIcon } from 'shared/icons/CloseIcon';
import { MenuIcon } from 'shared/icons/MenuIcon';
import { Logo } from 'shared/Logo/Logo';
import { ThemeSwitcher } from 'shared/ThemeSwitcher/ThemeSwitcher';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useActionOnClickOutside([sidebarRef, menuRef], () => setIsOpen(false));

  return (
    <>
      <div ref={menuRef}>
        <MenuIcon className={styles.sidebarToggle} onClick={() => setIsOpen(true)} />
      </div>
      <div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`} ref={sidebarRef}>
        <div className={styles.header}>
          <Logo />
          <CloseIcon onClick={() => setIsOpen(false)} className={styles.closeButton} />
        </div>
        <div className={styles.content}>
          <div className={styles.row}>
            <div>{t('theme')}</div>
            <ThemeSwitcher />
          </div>
          <div className={styles.row}>
            <div>{t('theme')}</div>
            <div>
              <em>(coming soon)</em>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <p>Adrian Caballero · {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};
