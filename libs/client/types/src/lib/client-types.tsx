import styles from './client-types.module.css';

/* eslint-disable-next-line */
export interface ClientTypesProps {}

export function ClientTypes(props: ClientTypesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientTypes!</h1>
    </div>
  );
}

export default ClientTypes;
