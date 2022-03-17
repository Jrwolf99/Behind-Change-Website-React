import React from "react";
import { Link } from "react-router-dom";

import styles from "./ActionText.module.css";
import "../../../globalstyles/typography.css";

export default function ActionText() {
  return (
    <div className={styles["action-text"]}>
      <p className="inter-200">
        Make an <strong>impact!</strong> Let’s get in touch.
      </p>
      <Link>Start a proposal &gt;</Link>
    </div>
  );
}
