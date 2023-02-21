import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderCircle}>
      <p className={styles.loaderContent}>LOADING</p>
      <div className={styles.loaderLineMask}>
        <div className={styles.loaderLine}></div>
      </div>
    </div>
  );
};

export default Loader;
