import { FormEvent, useState } from 'react';

import { fetchCharacters, fetchNextPage, fetchPrevPage } from 'store/characters/characters.actions';
import {
  selectCurrentPage,
  selectIsFirstPage,
  selectIsLastPage,
  selectIsLoading,
  selectLastPage,
} from 'store/characters/characters.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

import styles from './Navigation.module.scss';

export const Navigation = () => {
  const [name, setName] = useState('');

  const currentPage = useAppSelector((state) => selectCurrentPage(state));
  const lastPage = useAppSelector((state) => selectLastPage(state));
  const isFirstPage = useAppSelector((state) => selectIsFirstPage(state));
  const isLastPage = useAppSelector((state) => selectIsLastPage(state));
  const isLoading = useAppSelector((state) => selectIsLoading(state));

  const dispatch = useAppDispatch();

  const onSearch = (e: FormEvent) => {
    void dispatch(fetchCharacters({ name, page: 1 }));
    e.preventDefault();
  };

  const onReset = () => {
    setName('');
    void dispatch(fetchCharacters({ name: '', page: 1 }));
  };

  const onPrevClicked = () => void dispatch(fetchPrevPage());
  const onNextClicked = () => void dispatch(fetchNextPage());

  return (
    <>
      <div className={styles.searchBar}>
        <form onSubmit={onSearch} onReset={onReset}>
          <input
            disabled={isLoading}
            value={name}
            onChange={(e: FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)}
          />
          {name && (
            <div className={styles.resetButton}>
              <button type="reset">✖️</button>
            </div>
          )}
          <button type="submit" disabled={isLoading}>
            🔎
          </button>
        </form>
      </div>
      <div className={styles.navBar}>
        <button disabled={isFirstPage || isLoading} onClick={onPrevClicked}>
          &lt;
        </button>
        <h3>
          Page {currentPage} out of {lastPage}
        </h3>
        <button disabled={isLastPage || isLoading} onClick={onNextClicked}>
          &gt;
        </button>
      </div>
    </>
  );
};
