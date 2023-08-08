import { useEffect } from 'react';

import { NotFound } from 'components/NotFound/NotFound';
import { fetchCharacters } from 'store/characters/characters.actions';
import { selectCharacters, selectFetchError, selectIsLoading } from 'store/characters/characters.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

import { CharacterCard } from './CharacterCard/CharacterCard';

import styles from './Characters.module.scss';

export const Characters = () => {
  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const fetchError = useAppSelector((state) => selectFetchError(state));
  const characters = useAppSelector((state) => selectCharacters(state));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && !fetchError && !characters.length) {
      void dispatch(fetchCharacters());
    }
  }, [characters.length, dispatch, fetchError, isLoading]);

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
    return <NotFound hideButton />;
  }

  return (
    <div className={styles.grid}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};
