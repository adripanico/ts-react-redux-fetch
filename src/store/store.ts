import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { charactersReducer } from './characters/characters.reducer';

const store = configureStore({
  reducer: combineReducers({
    characters: charactersReducer,
  }),
  devTools: { name: 'innerStore' },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type AppSelector<T> = (_state: RootState) => T;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
