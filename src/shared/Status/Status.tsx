import { useTranslation } from 'react-i18next';

import { CharacterGender, CharacterStatus } from 'models/character';

import styles from './Status.module.scss';

interface ICharacterStatusProps {
  status: CharacterStatus;
  className?: string;
  gender: CharacterGender;
}

export const Status = ({ status, gender, className = '' }: ICharacterStatusProps) => {
  const { t } = useTranslation();
  return <span className={`${styles.status} ${styles[status]} ${className}`}>{t(status, { context: gender })}</span>;
};
