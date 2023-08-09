import { ChevronLeftIcon } from 'shared/icons/ChevronLeftIcon';
import { fetchNextPage, fetchPrevPage } from 'store/characters/characters.actions';
import {
  selectCurrentPage,
  selectIsFirstPage,
  selectIsLastPage,
  selectIsLoading,
  selectLastPage,
} from 'store/characters/characters.selector';
import { useAppDispatch, useAppSelector } from 'store/store';

import styles from './NavBar.module.scss';

export const NavBar = () => {
  const isLoading = useAppSelector((state) => selectIsLoading(state));
  const currentPage = useAppSelector((state) => selectCurrentPage(state));
  const lastPage = useAppSelector((state) => selectLastPage(state));
  const isFirstPage = useAppSelector((state) => selectIsFirstPage(state));
  const isLastPage = useAppSelector((state) => selectIsLastPage(state));

  const dispatch = useAppDispatch();

  const onPrevClicked = () => {
    scroll(0, 0);
    void dispatch(fetchPrevPage());
  };

  const onNextClicked = () => {
    scroll(0, 0);
    void dispatch(fetchNextPage());
  };

  return (
    <div className={styles.navBar}>
      <button disabled={isFirstPage || isLoading} onClick={onPrevClicked}>
        <ChevronLeftIcon />
      </button>
      <h3>
        Page {currentPage} out of {lastPage}
      </h3>
      <button disabled={isLastPage || isLoading} onClick={onNextClicked} className={styles.nextPage}>
        <ChevronLeftIcon />
      </button>
    </div>
  );
};
