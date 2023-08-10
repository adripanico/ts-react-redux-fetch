import { FormEvent, useEffect, useState } from 'react';

import { SearchIcon } from 'shared/icons/SearchIcon';
import { TrashIcon } from 'shared/icons/TrashIcon';
import { fetchCharacters } from 'store/characters/characters.actions';
import { selectCurrentName, selectIsLoading } from 'store/characters/characters.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

import styles from './SearchBar.module.scss';

export const SearchBar = () => {
  const [name, setName] = useState('');

  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const currentName = useAppSelector((state) => selectCurrentName(state));

  useEffect(() => setName(currentName), [currentName]);

  const dispatch = useAppDispatch();

  const onSearch = (e: FormEvent) => {
    void dispatch(fetchCharacters({ name, page: 1 }));
    e.preventDefault();
  };

  const onReset = () => {
    setName('');
    void dispatch(fetchCharacters({ name: '', page: 1 }));
  };

  return (
    <nav className={styles.searchBar}>
      <form onSubmit={onSearch} onReset={onReset}>
        <div className={styles.inputAndResetWrapper}>
          <input
            disabled={isLoading}
            value={name}
            onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
          />
          {name && (
            <div className={styles.resetButton}>
              <button type="reset">
                <TrashIcon />
              </button>
            </div>
          )}
        </div>
        <button type="submit" disabled={isLoading} className={styles.submitButton}>
          <SearchIcon />
        </button>
      </form>
    </nav>
  );
};
