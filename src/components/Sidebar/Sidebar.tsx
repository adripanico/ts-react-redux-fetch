import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useActionOnClickOutside } from 'hooks/useActionOnClickOutside';
import { CloseIcon } from 'shared/icons/CloseIcon';
import { MenuIcon } from 'shared/icons/MenuIcon';
import { Logo } from 'shared/Logo/Logo';

import { LanguageSelector } from './LanguageSelector/LanguageSelector';
import { ThemeSelector } from './ThemeSelector/ThemeSelector';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);

  useActionOnClickOutside([sidebarRef, menuIconRef], () => setIsOpen(false));

  return (
    <>
      <div ref={menuIconRef}>
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
            <ThemeSelector />
          </div>
          <div className={styles.row}>
            <div>{t('language')}</div>
            <LanguageSelector />
          </div>
        </div>
        <div className={styles.footer}>
          <p>Adrian Caballero · {new Date().getFullYear()}</p>
        </div>
      </div>
    </>
  );
};
