import React from "react";

import { Link } from "react-router-dom";

import styles from "./QuestionGrid.module.css";

export default function QuestionGrid() {
  return (
    <div className={styles["questions-grid"]}>
      <div className={`${styles["one"]} ${styles["grid-text"]}`}>
        <p>
          The solutions you <br />
          <strong>require.</strong>
        </p>
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

      <div className={styles["eight"]}>
        <p>Still not convinced?</p>
        <Link to="/portfolio">
          &nbsp;Browse our previous projects to see what you’re missing &gt;
        </Link>
      </div>

      <div className={`${styles["nine"]} ${styles["grid-text"]}`}>
        <p>
          Common <strong>Questions.</strong>
        </p>
      </div>
      <div className={styles["inner-grid"]}>
        <div className={styles["q1"]}>+ How long does the process take?</div>
        <div className={styles["q2"]}>+ Is your service Really free?</div>
        <div className={styles["q3"]}>
          + Who owns the rights to the website once it’s finished?
        </div>
        <div className={styles["q4"]}>
          + What happens if I dislike the design?
        </div>
      </div>
    </div>
  );
}
