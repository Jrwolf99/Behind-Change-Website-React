import React from "react";
import styles from "./HeroText.module.css";

import "../../../globalstyles/typography.css";
import "../../../globalstyles/utility.css";

export default function HeroText() {
  return (
    <div className={styles["hero-text"]}>
      <div className={styles["hero-text-bar"]}></div>
      <p className="inter-200">
        Positive impact <br />
        <strong>deserves</strong>
        <br /> positive support.
      </p>
    </div>
  );
}
