import styles from './feature-lib.module.css';

/* eslint-disable-next-line */
export interface FeatureLibProps {}

export function FeatureLib(props: FeatureLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FeatureLib!</h1>
    </div>
  );
}

export default FeatureLib;
