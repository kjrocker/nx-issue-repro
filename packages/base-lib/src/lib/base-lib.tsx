import styles from './base-lib.module.css';

/* eslint-disable-next-line */
export interface BaseLibProps {}

export function BaseLib(props: BaseLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BaseLib!</h1>
    </div>
  );
}

export default BaseLib;
