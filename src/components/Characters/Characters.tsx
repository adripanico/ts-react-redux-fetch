import {
  selectCharacters,
  selectFetchError,
  selectIsLoading,
} from '../../store/characters/characters.selector';
import { useAppSelector } from '../../store/store';
import { Character } from '../Character/Character';
import { NotFound } from '../NotFound/NotFound';

import styles from './Characters.module.scss';

export const Characters = () => {
  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const fetchError = useAppSelector((state) => selectFetchError(state));
  const characters = useAppSelector((state) => selectCharacters(state));

  if (isLoading) {
    return (
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Character key={i} />
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
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};
