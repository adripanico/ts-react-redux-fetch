import { RootState } from '../store';
import { ICharactersState } from './characters.reducer';
import { createSelector } from '@reduxjs/toolkit';

export const charactersStateSelector = (state: RootState) =>
  state.characters as ICharactersState;

type ICharactersStateSelector<T> = (state: RootState) => T;

export const selectCharacters: ICharactersStateSelector<
  ICharactersState['characters']
> = createSelector([charactersStateSelector], (state: ICharactersState) => {
  return state.characters;
});

export const selectIsLoading: ICharactersStateSelector<
  ICharactersState['isLoading']
> = createSelector(
  [charactersStateSelector],
  (state: ICharactersState) => state.isLoading
);

export const selectCurrentPage: ICharactersStateSelector<
  ICharactersState['currentPage']
> = createSelector(
  [charactersStateSelector],
  (state: ICharactersState) => state.currentPage
);

export const selectLastPage: ICharactersStateSelector<
  ICharactersState['lastPage']
> = createSelector(
  [charactersStateSelector],
  (state: ICharactersState) => state.lastPage
);

export const selectIsFirstPage: ICharactersStateSelector<boolean> =
  createSelector(
    [charactersStateSelector],
    (state: ICharactersState) => state.currentPage === 1
  );

export const selectIsLastPage: ICharactersStateSelector<boolean> =
  createSelector(
    [charactersStateSelector],
    (state: ICharactersState) => state.currentPage === state.lastPage
  );

export const selectFetchError: ICharactersStateSelector<
  ICharactersState['fetchError']
> = createSelector(
  [charactersStateSelector],
  (state: ICharactersState) => state.fetchError
);
