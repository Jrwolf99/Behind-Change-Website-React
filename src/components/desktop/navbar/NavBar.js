import React from "react";
import "../../../globalstyles/typography.css";
import styles from "./NavBar.module.css";

//assets
import CircleMenu from "../../../assets/images/CircleMenu.svg";
import CircleMenuBlue from "../../../assets/images/CircleMenuBlue.svg";
import { Link } from "react-router-dom";

export default function Nav({ buttonclr }) {
  return (
    <nav className={styles["myNav"]}>
      <Link className={styles["logo"]} to="/">
        <p className={`${"inter-200"} ${styles["behind"]}`}>Behind |</p>
        <p className={`${"playfair-600"} ${styles["change"]}`}>&nbsp;Change</p>
      </Link>
      <div className={styles["hamburger-icon"]}>
        {buttonclr === "blue" ? (
          <img src={CircleMenuBlue} alt="Menu Button" />
        ) : (
          <img src={CircleMenu} alt="Menu Button" />
        )}
      </div>
    </nav>
  );
}
