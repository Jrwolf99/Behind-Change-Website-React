import React from "react";
import "../../../globalstyles/typography.css";
import styles from "./NavBar.module.css";

export default function Nav() {
  return (
    <nav className={styles["myNav"]}>
      <div className={styles["logo"]}>
        <p className={`${"inter-200"} ${styles["behind"]}`}>Behind |</p>
        <p className={`${"playfair-600"} ${styles["change"]}`}>&nbsp;Change</p>
      </div>
      <div className={styles["hamburger-icon"]}>
        <div className={styles["hamburger-line"]}></div>
        <div className={styles["hamburger-line"]}></div>
        <div className={styles["hamburger-line"]}></div>
      </div>
    </nav>
  );
}
