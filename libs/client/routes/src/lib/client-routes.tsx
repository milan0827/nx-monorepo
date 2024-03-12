import styles from './client-routes.module.css';

/* eslint-disable-next-line */
export interface ClientRoutesProps {}

export function ClientRoutes(props: ClientRoutesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientRoutes!</h1>
    </div>
  );
}

export default ClientRoutes;
