import styles from './client-hooks.module.css';

/* eslint-disable-next-line */
export interface ClientHooksProps {}

export function ClientHooks(props: ClientHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientHooks!</h1>
    </div>
  );
}

export default ClientHooks;
