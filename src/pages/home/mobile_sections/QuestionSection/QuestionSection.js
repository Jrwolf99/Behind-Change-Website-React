import React from "react";

//styles
import styles from "./QuestionSection.module.css";
import "../../../../globalstyles/utility.css";
import { Link } from "react-router-dom";

export default function QuestionSection() {
  return (
    <div className={styles["question-section"]}>
      <p className={styles["question-title"]}>Your Questions Answered</p>
      <div className={`inter-400 ${styles["q-bubbles"]}`}>
        <p className={` ${styles["q-bubble"]} ${styles["q-bubble1"]}`}>
          + How long does the process take?
        </p>
        <p className={` ${styles["q-bubble"]} ${styles["q-bubble2"]}`}>
          + Is your service
          <h4
            className="inter-400"
            style={{ fontWeight: 500, display: "inline" }}
          >
            &nbsp;Really&nbsp;
          </h4>
          free?
        </p>
        <p className={` ${styles["q-bubble"]} ${styles["q-bubble3"]}`}>
          + Who owns the rights to the website once it’s finished?
        </p>
        <p className={` ${styles["q-bubble"]} ${styles["q-bubble4"]}`}>
          + What happens if I dislike the design?
        </p>
      </div>

      <div className={`${styles["portfolio-info"]}`}>
        <p>
          Not great with commitment? We get it. Browse some of our prior
          projects to see what you’re missing.
        </p>

        <Link className={`${styles["portfolio-link"]}`}>Portfolio</Link>
      </div>
    </div>
  );
}
