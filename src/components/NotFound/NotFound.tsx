import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'app/routes';

import styles from './NotFound.module.scss';

interface INotFoundProps {
  hideButton?: boolean;
}

const NotFound = ({ hideButton }: INotFoundProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.notFound}>
      <h1>{t('notFoundTitle')}</h1>
      <h2>{t('notFoundText')}</h2>
      {!hideButton && <button onClick={() => navigate(ROUTES.CHARACTERS)}>{t('backToHome')}</button>}
      <div className={styles.img}></div>
    </div>
  );
};

export default NotFound;
