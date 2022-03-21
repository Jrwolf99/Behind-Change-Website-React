import React from "react";
import "../../../globalstyles/typography.css";
import styles from "./NavBar.module.css";

//assets
import CircleMenu from "../../../assets/images/CircleMenu.svg";

export default function Nav() {
  return (
    <nav className={styles["myNav"]}>
      <div className={styles["logo"]}>
        <p className={`${"inter-200"} ${styles["behind"]}`}>Behind |</p>
        <p className={`${"playfair-600"} ${styles["change"]}`}>&nbsp;Change</p>
      </div>
      <div className={styles["hamburger-icon"]}>
        <div className={styles["line1"]}></div>
        <div className={styles["line2"]}></div>
        <div className={styles["line3"]}></div>
      </div>
    </nav>
  );
}
