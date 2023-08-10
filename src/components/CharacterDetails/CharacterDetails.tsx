import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { ROUTES } from 'app/routes';
import { CharacterImg } from 'shared/CharacterImg/CharacterImg';
import { DetailParagraph } from 'shared/DetailParagraph/DetailParagraph';
import { ArrowBackIcon } from 'shared/icons/ArrowBackIcon';
import { Status } from 'shared/Status/Status';
import { selectCharacter } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

import { Episodes } from './Episodes/Episodes';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useAppSelector((state) => selectCharacter(state, id));

  // Character shall be already present in the store.
  // Otherwise, let's redirect the user to the 'characters' view
  if (!character) {
    return <Navigate to="/characters" replace={true} />;
  }

  return (
    <>
      <nav>
        <h1 className={styles.goBack} onClick={() => navigate(ROUTES.CHARACTERS)}>
          <ArrowBackIcon /> Go Back
        </h1>
      </nav>
      <section>
        <div className={styles.characterDetails}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h2>{character.name}</h2>
              <Status status={character.status} className={styles.status} />
              <div className={styles.img}>
                <CharacterImg alt={character.name} src={character.image} />
              </div>
            </div>
            <DetailParagraph label="Gender" value={character.gender} />
            <DetailParagraph
              label="Species"
              value={`${character.species}${character.type ? ` (${character.type})` : ''}`}
            />
            <DetailParagraph label="Origin" value={character.origin.name} />
            <DetailParagraph label="Location" value={character.location.name} />
            <Episodes episodeUrls={character.episode} />
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterDetails;
