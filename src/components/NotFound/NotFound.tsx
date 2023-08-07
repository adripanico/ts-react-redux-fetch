import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>WOOPS!</h1>
      <h2>Something went riggity riggity wrecked!</h2>
      <h3>No results found</h3>
      <div className={styles.img}></div>
    </div>
  );
};
