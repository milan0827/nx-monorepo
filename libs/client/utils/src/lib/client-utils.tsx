import styles from './client-utils.module.css';

/* eslint-disable-next-line */
export interface ClientUtilsProps {}

export function ClientUtils(props: ClientUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientUtils!</h1>
    </div>
  );
}

export default ClientUtils;
