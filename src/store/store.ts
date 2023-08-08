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

/**
 * Generic Redux Selector Type (credit to Sergio Municio)
 *
 * - Usage without arguments, only return type:
 * ```ts
 * const mySelector: ISelector<boolean> = createSelector(state => state.booleanValue);
 * // ...
 * const mySelectorResponse = useAppSelector(mySelector);
 * ```
 * - Usage with arguments (named tuples are optional, but preferred):
 * ```ts
 *  * const mySelector: ISelector<boolean, [arg1: string]> = createSelector([(state, arg1) => state.myStore, (state, arg1) => arg1], (myStore, arg1) => myStore[arg1]);
 * // ...
 * const mySelectorResponse = useAppSelector(state => mySelector(state, arg1));
 * ```
 */
export type ISelector<ReturnType, ParamsType extends unknown[] = []> = (
  _state: RootState,
  ..._args: ParamsType
) => ReturnType;

export default store;
