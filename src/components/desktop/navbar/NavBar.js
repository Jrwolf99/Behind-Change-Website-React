import React from "react";
import "../../../globalstyles/typography.css";
import styles from "./NavBar.module.css";

//assets
import ProposalButton from "../../../assets/images/ProposalButton.svg";
import { Link } from "react-router-dom";
import BackButton from "./BackButton/BackButton";

export default function Nav({ buttontype }) {
  return (
    <nav className={styles["myNav"]}>
      <Link className={styles["logo"]} to="/">
        <p className={`${"inter-200"} ${styles["behind"]}`}>Behind |</p>
        <p className={`${"playfair-600"} ${styles["change"]}`}>&nbsp;Change</p>
      </Link>
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
