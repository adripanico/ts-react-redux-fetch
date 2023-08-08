import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { ArrowBackIcon } from 'shared/icons/ArrowBackIcon';
import { selectCharacter } from 'store/characters/characters.selector';
import { useAppSelector } from 'store/store';

import styles from './CharacterDetailsView.module.scss';

export const CharacterDetailsView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = useAppSelector((state) => selectCharacter(state, id));

  if (!character) {
    return <Navigate to="/characters" replace={true} />;
  }

  return (
    <div className={styles.characterDetails}>
      <h1 className={styles.goBack} onClick={() => navigate('/characters')}>
        <ArrowBackIcon /> Back to characters
      </h1>

      {/* TO BE CONTINUED */}
      <div className={styles.info}>
        <pre>{JSON.stringify(character, null, 2)}</pre>
      </div>
    </div>
  );
};
