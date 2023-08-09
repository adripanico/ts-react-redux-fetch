import { useCallback, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { getEpisode } from 'http/rickAndMorty';
import { IEpisode } from 'models/episode';
import { CharacterImg } from 'shared/CharacterImg/CharacterImg';
import { DetailParagraph } from 'shared/DetailParagraph/DetailParagraph';
import { ArrowBackIcon } from 'shared/icons/ArrowBackIcon';
import { Status } from 'shared/Status/Status';
import { selectCharacter } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

import styles from './CharacterDetails.module.scss';

const CharacterDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useAppSelector((state) => selectCharacter(state, id));

  const [episodes, setEpisodes] = useState<IEpisode[]>();

  const getAllCharacterEpisodes = useCallback(async () => {
    const response = await Promise.all((character?.episode ?? []).map((episode) => getEpisode(episode)));
    setEpisodes(response);
  }, [character]);

  useEffect(() => {
    void getAllCharacterEpisodes();
  }, [getAllCharacterEpisodes]);

  // Character shall be already present in the store.
  // Otherwise, let's redirect the user to the 'characters' view
  if (!character) {
    return <Navigate to="/characters" replace={true} />;
  }

  return (
    <div className={styles.characterDetails}>
      <h1 className={styles.goBack} onClick={() => navigate('/characters')}>
        <ArrowBackIcon /> Back to characters
      </h1>

      <div className={styles.info}>
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
          {episodes && (
            <div>
              <p>
                Seen in {episodes.length} episode{episodes.length > 1 ? 's' : ''}:
              </p>
              <ul>
                {episodes.map((episode) => (
                  <li key={episode.id}>
                    {episode.name} <span>({episode.episode})</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
