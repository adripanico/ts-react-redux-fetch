import { ICharacter } from '../../models/character';
import { Status } from '../Character/Status/Status';

import styles from './Character.module.scss';

interface ICharacterProps {
  character?: ICharacter;
}

export const Character = ({ character }: ICharacterProps) => {
  if (!character) {
    return <div className={`${styles.character} ${styles.loading}`}></div>;
  }

  const { image, name } = character;
  return (
    <div className={styles.character}>
      <div className={styles.characterImg}>
        <img
          src={image}
          alt={name}
          crossOrigin="anonymous"
          width="180"
          height="180"
        />
      </div>
      <div className={styles.characterInfo}>
        <h3>{character.name}</h3>
        <Status status={character.status} />
        <p>
          Origin: <strong>{character.origin.name}</strong>
        </p>
        <p>
          Location: <strong>{character.location.name}</strong>
        </p>
      </div>
    </div>
  );
};
