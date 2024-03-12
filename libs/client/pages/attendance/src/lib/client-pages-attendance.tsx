import styles from './client-pages-attendance.module.css';

/* eslint-disable-next-line */
export interface ClientPagesAttendanceProps {}

export function ClientPagesAttendance(props: ClientPagesAttendanceProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ClientPagesAttendance!</h1>
    </div>
  );
}

export default ClientPagesAttendance;
