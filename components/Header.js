import Link from "next/link";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Eventia</a>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
