import Link from "next/link";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; 2021, TS</p>
      <p>
        <Link href="/about">About Eventia</Link>
      </p>
    </footer>
  )
}

export default Footer
