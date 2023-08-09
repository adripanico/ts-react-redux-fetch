import { CharacterStatus } from 'models/character';

import styles from './Status.module.scss';

interface ICharacterStatusProps {
  status: CharacterStatus;
  className?: string;
}

export const Status = ({ status, className = '' }: ICharacterStatusProps) => {
  return <span className={`${styles.status} ${styles[status]} ${className}`}>{status}</span>;
};
