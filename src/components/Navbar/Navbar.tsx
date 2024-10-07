import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.root}>
      <div className={styles.branding}>
        <h4 className={styles.name}>Martin Petr</h4>
      </div>
      <div className={styles.links}>
        <div className={styles.link} data-cn="0">
          <div className={styles.decoration}></div>
          <Link className={styles.link_anchor} href="/#about">
            About me
          </Link>
        </div>
        <div className={styles.link} data-cn="1">
          <div className={styles.decoration}></div>
          <Link className={styles.link_anchor} href="/#projects">
            Projects
          </Link>
        </div>
        <div className={styles.link} data-cn="2">
          <div className={styles.decoration}></div>
          <Link className={styles.link_anchor} href="/#contact">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
