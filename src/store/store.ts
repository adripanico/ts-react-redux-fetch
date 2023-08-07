import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { charactersReducer } from './characters/characters.reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: combineReducers({
    characters: charactersReducer,
  }),
  devTools: { name: 'innerStore' },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppSelector<T> = (state: RootState) => T;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
