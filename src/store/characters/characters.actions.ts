import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCharactersByPage } from '../../http/rickAndMorty';
import { ICharacter } from '../../models/character';
import { RootState } from '../store';
import { FETCH_CHARACTERS, FETCH_NEXT_PAGE } from './characters.constants';

export const fetchCharacters = createAsyncThunk<
  {
    characters: ICharacter[];
    currentPage: number;
    currentName: string;
    lastPage: number;
  },
  {
    page?: number;
    name?: string;
  } | void
>(FETCH_CHARACTERS, async (data, thunkApi) => {
  const page = data?.page || (thunkApi.getState() as RootState).characters.currentPage;
  const searchName = data?.name ?? (thunkApi.getState() as RootState).characters.currentName;
  try {
    const response = await getCharactersByPage({ page, searchName });
    return {
      characters: response.results,
      currentPage: page,
      currentName: searchName,
      lastPage: response.info.pages,
    };
  } catch (error) {
    const errorStr = typeof error === 'string' ? `: ${error}` : '';
    // eslint-disable-next-line no-console
    console.error(`Something went wrong${errorStr}`);
    throw error;
  }
});

export const fetchPrevPage = createAsyncThunk<void, void>(FETCH_NEXT_PAGE, (_data, thunkApi) => {
  let prevPage = (thunkApi.getState() as RootState).characters.currentPage - 1;
  if (prevPage < 1) {
    prevPage = 1;
  }
  void thunkApi.dispatch(fetchCharacters({ page: prevPage }));
});

export const fetchNextPage = createAsyncThunk<void, void>(FETCH_NEXT_PAGE, (_data, thunkApi) => {
  let nextPage = (thunkApi.getState() as RootState).characters.currentPage + 1;
  const pages = (thunkApi.getState() as RootState).characters.lastPage;
  if (nextPage > pages) {
    nextPage = pages;
  }
  void thunkApi.dispatch(fetchCharacters({ page: nextPage }));
});
