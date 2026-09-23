import styles from './Breadcrumb.module.css';

export default function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <a href="/" className={styles.breadcrumbLink}>HOME</a>
        </li>
        <li className={styles.breadcrumbSeparator}>/</li>
        <li className={styles.breadcrumbItem}>
          <span className={styles.breadcrumbCurrent}>SHOP</span>
        </li>
      </ol>
    </nav>
  );
}