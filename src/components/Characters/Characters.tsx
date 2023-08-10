import { Grid } from './Grid/Grid';
import { NavBar } from './NavBar/NavBar';
import { SearchBar } from './SearchBar/SearchBar';

const Characters = () => {
  return (
    <>
      <SearchBar />
      <NavBar />
      <Grid />
      <NavBar displayOnlyWithCharacters />
    </>
  );
};

export default Characters;
