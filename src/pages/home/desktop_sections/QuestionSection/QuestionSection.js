import React from "react";

//styles
import styles from "./QuestionSection.module.css";
import "../../../../globalstyles/utility.css";

import QuestionGrid from "../../../../components/desktop/question-grid/QuestionGrid";

export default function QuestionSection() {
  return (
    <div className={styles["question-section"]}>
      <QuestionGrid />
    </div>
  );
}
