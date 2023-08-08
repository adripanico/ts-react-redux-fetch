import { useNavigate } from 'react-router-dom';

import styles from './NotFound.module.scss';

interface INotFoundProps {
  hideButton?: boolean;
}

export const NotFound = ({ hideButton }: INotFoundProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1>WOOPS!</h1>
      <h2>Something went riggity riggity wrecked!</h2>
      <h3>No results found</h3>
      {!hideButton && <button onClick={() => navigate('/characters')}>WAY BACK HOME</button>}
      <div className={styles.img}></div>
    </div>
  );
};
