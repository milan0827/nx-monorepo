import styles from './client-pages.module.css';

/* eslint-disable-next-line */
export interface ClientPagesProps {}

export function ClientPages(props: ClientPagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientPages!</h1>
    </div>
  );
}

export default ClientPages;
