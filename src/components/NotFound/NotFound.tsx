import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'app/routes';

import styles from './NotFound.module.scss';

interface INotFoundProps {
  hideButton?: boolean;
}

const NotFound = ({ hideButton }: INotFoundProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1>WOOPS!</h1>
      <h2>Something went riggity riggity wrecked!</h2>
      {!hideButton && <button onClick={() => navigate(ROUTES.CHARACTERS)}>WAY BACK HOME</button>}
      <div className={styles.img}></div>
    </div>
  );
};

export default NotFound;
