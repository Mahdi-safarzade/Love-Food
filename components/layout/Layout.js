import Link from "next/link";
import styles from "./Layout.module.css"
const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">LoveFood</Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>
        {children}
      </div>

      <footer className={styles.footer}>
        <a href="https://lovefood.com" target="_blank" rel="noreferrer">Create by LoveFood Team | &copy;</a>
      </footer>
    </>
  );
};

export default Layout;