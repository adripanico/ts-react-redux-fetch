import { selectAreCharactersLoaded } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

import { Grid } from './Grid/Grid';
import { NavBar } from './NavBar/NavBar';
import { SearchBar } from './SearchBar/SearchBar';

const Characters = () => {
  const areCharactersLoaded = useAppSelector((state) => selectAreCharactersLoaded(state));

  return (
    <>
      <SearchBar />
      <NavBar />
      <Grid />
      {areCharactersLoaded && <NavBar />}
    </>
  );
};

export default Characters;
