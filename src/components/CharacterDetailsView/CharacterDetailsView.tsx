import { Navigate, useParams } from 'react-router-dom';

import { selectCharacter } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

// import styles from './CharacterDetailsView.module.scss';

export const CharacterDetailsView = () => {
  const { id } = useParams();

  const character = useAppSelector((state) => selectCharacter(state, id));

  if (!character) {
    return <Navigate to="/characters" replace={true} />;
  }

  return <pre>{JSON.stringify(character, null, 2)}</pre>;
};
