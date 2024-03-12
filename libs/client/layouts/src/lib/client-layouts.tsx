import styles from './client-layouts.module.css';

/* eslint-disable-next-line */
export interface ClientLayoutsProps {}

export function ClientLayouts(props: ClientLayoutsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientLayouts!</h1>
    </div>
  );
}

export default ClientLayouts;
