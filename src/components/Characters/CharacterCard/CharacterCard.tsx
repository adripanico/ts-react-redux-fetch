import { useNavigate } from 'react-router-dom';

import { ICharacter } from 'models/character';

import { Status } from './Status/Status';

import styles from './CharacterCard.module.scss';

interface ICharacterProps {
  character?: ICharacter;
}

export const CharacterCard = ({ character }: ICharacterProps) => {
  const navigate = useNavigate();

  if (!character) {
    return <div className={`${styles.characterCard} ${styles.loading}`}></div>;
  }

  const { image, name } = character;
  return (
    <div className={styles.characterCard} onClick={() => navigate(`/characters/${character.id}`)}>
      <div className={styles.characterImg}>
        <img src={image} alt={name} crossOrigin="anonymous" />
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
