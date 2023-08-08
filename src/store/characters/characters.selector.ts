import { createSelector } from '@reduxjs/toolkit';

import { ISelector, RootState } from '../store';
import { ICharactersState } from './characters.reducer';

export const charactersStateSelector = (state: RootState) => state.characters;

export const selectCharacters: ISelector<ICharactersState['characters']> = createSelector(
  [charactersStateSelector],
  (state) => {
    return state.characters;
  }
);

export const selectCharacter: ISelector<ICharactersState['characters'][number] | undefined, [id?: string]> =
  createSelector([charactersStateSelector, (_, id?: string) => id], (state, id) => {
    if (!id) {
      return undefined;
    }
    return state.characters.find((character) => character.id === Number(id));
  });

export const selectIsLoading: ISelector<ICharactersState['isLoading']> = createSelector(
  [charactersStateSelector],
  (state) => state.isLoading
);

export const selectCurrentPage: ISelector<ICharactersState['currentPage']> = createSelector(
  [charactersStateSelector],
  (state) => state.currentPage
);

export const selectLastPage: ISelector<ICharactersState['lastPage']> = createSelector(
  [charactersStateSelector],
  (state) => state.lastPage
);

export const selectIsFirstPage: ISelector<boolean> = createSelector(
  [charactersStateSelector],
  (state) => state.currentPage === 1
);

export const selectIsLastPage: ISelector<boolean> = createSelector(
  [charactersStateSelector],
  (state) => state.currentPage === state.lastPage
);

export const selectFetchError: ISelector<ICharactersState['fetchError']> = createSelector(
  [charactersStateSelector],
  (state) => state.fetchError
);
