import React from "react";

//styles
import styles from "./ActionSection.module.css";
import "../../../../globalstyles/utility.css";
import { Link } from "react-router-dom";

//components

export default function ActionSection() {
  return (
    <div className={styles["action-section"]}>
      <p className={`inter-200 ${styles["action-statement"]}`}>
        Otherwise... <br /> Let's make an <strong>impact!</strong>
      </p>
      <br />
      <Link className={`inter-400 ${styles["action-link"]}`}>
        Start a proposal &gt;
      </Link>
    </div>
  );
}
