import React from "react";

import styles from "./QuestionGrid.module.css";
import "../../../globalstyles/typography.css";

import Solutions from "./solutions/Solutions";
import Reach from "./reach/Reach";
import Abundance from "./abundance/Abundance";
import WebUsage from "./webusage/WebUsage";
import Accessibility from "./accessibility/Accessibility";
import Experience from "./experience/Experience";
import Cost from "./cost/Cost";
import Convinced from "./convinced/Convinced";
import CommonQuestions from "./common-questions/CommonQuestions";
import InnerGrid from "./inner-grid/InnerGrid";

export default function QuestionGrid() {
  return (
    <div className={styles["questions-grid"]}>
      <div className={`${styles["one"]}`}>
        <Solutions />
      </div>
      <div className={`${styles["two"]}`}>
        <Reach />
      </div>
      <div className={`${styles["three"]}`}>
        <Abundance />
      </div>
      <div className={`${styles["four"]}`}>
        <WebUsage />
      </div>
      <div className={`${styles["five"]}`}>
        <Accessibility />
      </div>
      <div className={`${styles["six"]}`}>
        <Experience />
      </div>
      <div className={`${styles["seven"]}`}>
        <Cost />
      </div>
      <div className={`${styles["eight"]} `}>
        <Convinced />
      </div>
      <div className={styles["nine"]}>
        <CommonQuestions />
      </div>
      <div className={styles["ten"]}>
        <InnerGrid />
      </div>
    </div>
  );
}
