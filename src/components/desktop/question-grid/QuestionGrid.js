import React from "react";

import styles from "./QuestionGrid.module.css";

export default function QuestionGrid() {
  return (
    <div className={styles["questions-grid"]}>
      <div className={styles["one"]}>
        <p>The solutions you require.</p>
      </div>
      <div className={styles["two"]}>
        <p>Increase your reach.</p>
      </div>
      <div className={styles["three"]}>
        <p>An abundance of tools at your disposal.</p>
      </div>
      <div className={styles["four"]}>
        <p>Stat on web usage</p>
      </div>
      <div className={styles["five"]}>
        <p>
          &lt;body&gt; &lt;img src=”accessibility.jpg” alt =”when a picture
          can’t be worth a thousand words, we ensure our descriptions are worth
          a thousand pictures” /&gt; &lt;/body&gt; Built with acccesibility in
          mind.
        </p>
      </div>
      <div className={styles["six"]}>
        <p>6 Years Combined Experience</p>
      </div>
      <div className={styles["seven"]}>
        <p>$0 cost</p>
      </div>
    </div>
  );
}
