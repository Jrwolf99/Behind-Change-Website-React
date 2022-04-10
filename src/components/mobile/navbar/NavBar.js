import React from "react";
import { Link } from "react-router-dom";
import "../../../globalstyles/typography.css";
import BackButton from "../../desktop/navbar/BackButton/BackButton";
import styles from "./NavBar.module.css";

import ProposalButton from "../../../assets/images/ProposalButton.svg";

export default function Nav({ buttontype }) {
  return (
    <nav className={styles["myNav"]}>
      <div className={styles["logo"]}>
        <p className={`${"inter-200"} ${styles["behind"]}`}>Behind |</p>
        <p className={`${"playfair-600"} ${styles["change"]}`}>&nbsp;Change</p>
      </div>
      {buttontype === "proposal" ? (
        <Link to="/">
          <BackButton />
        </Link>
      ) : (
        <Link to="/contact">
          <img src={ProposalButton} alt="proposal button not pressed" />
        </Link>
      )}
    </nav>
  );
}
