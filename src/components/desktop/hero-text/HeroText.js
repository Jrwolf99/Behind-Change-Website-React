import React from "react";
import styles from "./HeroText.module.css";

import "../../../globalstyles/typography.css";

export default function HeroText() {
  return (
    <div className={styles["hero-text"]}>
      <p className="inter-200">
        Positive impact <strong>deserves</strong> positive support.
      </p>
      <p className="inter-200">
        When it comes to social impact, theres no better tool than the internet
        to make a statement. But when your time’s allotted to helping others, it
        can be difficult and costly to build your online brand.{" "}
      </p>
      <p className="inter-200">Scroll down to discover your solution.</p>
      <div className={styles["arrow"]}>
        <div className={styles["arrow__body"]}></div>
        <div className={styles["arrow__head-left"]}></div>
        <div className={styles["arrow__head-right"]}></div>
      </div>
    </div>
  );
}
