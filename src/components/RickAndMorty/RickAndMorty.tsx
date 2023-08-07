import { useEffect } from 'react';
import { fetchCharacters } from '../../store/characters/characters.actions';
import { useAppDispatch } from '../../store/store';
import { Characters } from '../Characters/Characters';
import { Navigation } from '../Navigation/Navigation';

export const RickAndMorty = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Characters />
    </>
  );
};
