import styles from './client-pages-department.module.css';

/* eslint-disable-next-line */
export interface ClientPagesDepartmentProps {}

export function ClientPagesDepartment(props: ClientPagesDepartmentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientPagesDepartment!</h1>
    </div>
  );
}

export default ClientPagesDepartment;
