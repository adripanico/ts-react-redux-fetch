import { createReducer } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/character';
import { fetchCharacters } from './characters.actions';

export interface ICharactersState {
  characters: ICharacter[];
  currentName: string;
  currentPage: number;
  fetchError: boolean;
  isLoading: boolean;
  lastPage: number;
}

const initialCharactersState: ICharactersState = {
  characters: [],
  currentName: '',
  currentPage: 1,
  fetchError: false,
  isLoading: false,
  lastPage: 1,
};

export const charactersReducer = createReducer(
  initialCharactersState,
  (builder) => {
    builder.addCase(fetchCharacters.pending, (state, action) => {
      return {
        ...state,
        characters: [],
        currentPage: action.meta.arg?.page || state.currentPage,
        fetchError: false,
        isLoading: true,
      };
    });

    builder.addCase(fetchCharacters.rejected, (state, _action) => {
      return {
        ...state,
        characters: [],
        currentPage: 1,
        fetchError: true,
        isLoading: false,
        lastPage: 1,
      };
    });

    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      const { characters, currentPage, currentName, lastPage } = action.payload;
      return {
        ...state,
        characters,
        currentName,
        currentPage,
        fetchError: false,
        isLoading: false,
        lastPage,
      };
    });
  }
);
