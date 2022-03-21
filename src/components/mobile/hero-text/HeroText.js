import React from "react";
import styles from "./HeroText.module.css";

import "../../../globalstyles/typography.css";
import "../../../globalstyles/utility.css";

export default function HeroText() {
  return (
    <div className={styles["hero-text"]}>
      <div></div>
      <p className="inter-200">
        Positive impact <strong>deserves</strong> positive support.
      </p>
    </div>
  );
}
