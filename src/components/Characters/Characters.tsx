import { NotFound } from 'components/NotFound/NotFound';
import { selectCharacters, selectFetchError, selectIsLoading } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

import { CharacterCard } from './CharacterCard/CharacterCard';

import styles from './Characters.module.scss';

export const Characters = () => {
  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const fetchError = useAppSelector((state) => selectFetchError(state));
  const characters = useAppSelector((state) => selectCharacters(state));

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5].map((i) => (
          <CharacterCard key={i} />
        ))}
      </div>
    );
  }

  if (fetchError) {
    return <NotFound />;
  }

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
