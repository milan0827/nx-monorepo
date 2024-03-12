import styles from './client-store.module.css';

/* eslint-disable-next-line */
export interface ClientStoreProps {}

export function ClientStore(props: ClientStoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientStore!</h1>
    </div>
  );
}

export default ClientStore;
