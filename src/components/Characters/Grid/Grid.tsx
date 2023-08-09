import { useEffect } from 'react';

import NotFound from 'components/NotFound/NotFound';
import { fetchCharacters } from 'store/characters/characters.actions';
import { selectCharacters, selectFetchError, selectIsLoading } from 'store/characters/characters.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

import { Card } from '../Card/Card';

import styles from './Grid.module.scss';

export const Grid = () => {
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
          <Card key={i} />
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
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
