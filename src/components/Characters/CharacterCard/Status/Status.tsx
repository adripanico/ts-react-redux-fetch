import { CharacterStatus } from 'models/character';

import styles from './Status.module.scss';

interface ICharacterStatusProps {
  status: CharacterStatus;
}

export const Status = ({ status }: ICharacterStatusProps) => {
  return (
    <div className={styles.status}>
      <div className={styles[status]}></div>
      <span>{status}</span>
    </div>
  );
};
