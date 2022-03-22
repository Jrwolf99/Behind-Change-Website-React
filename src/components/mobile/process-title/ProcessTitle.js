import React from "react";

import styles from "./ProcessTitle.module.css";

export default function ProcessTitle() {
  return (
    <div className={styles["process-title"]}>
      <p className={styles["header"]}>
        A <strong>Proven</strong> Process
      </p>
      <br />
      <p className={styles["subheader"]}>
        Planning is a crucial step to any business’s success. That’s why we
        follow the same guideline for each of our clients.
      </p>
    </div>
  );
}
