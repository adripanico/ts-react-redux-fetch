import { useEffect } from 'react';

import { Characters } from 'components/Characters/Characters';
import { Navigation } from 'components/Navigation/Navigation';
import { fetchCharacters } from 'store/characters/characters.actions';
import { useAppDispatch } from 'store/store';

export const CharactersView = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchCharacters());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Characters />
    </>
  );
};
