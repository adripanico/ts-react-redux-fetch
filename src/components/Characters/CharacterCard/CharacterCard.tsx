import { useNavigate } from 'react-router-dom';

import { ICharacter } from 'models/character';
import { CharacterImg } from 'shared/CharacterImg/CharacterImg';
import { DetailParagraph } from 'shared/DetailParagraph/DetailParagraph';
import { Status } from 'shared/Status/Status';

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
        <CharacterImg src={image} alt={name} />
      </div>
      <div className={styles.characterInfo}>
        <h3>{character.name}</h3>
        <Status status={character.status} />
        <DetailParagraph label="Origin" value={character.origin.name} />
        <DetailParagraph label="Location" value={character.location.name} />
      </div>
    </div>
  );
};
