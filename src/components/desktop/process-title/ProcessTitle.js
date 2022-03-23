import React from "react";

import styles from "./ProcessTitle.module.css";
import "../../../globalstyles/typography.css";

export default function ProcessTitle() {
  return (
    <div className={styles["process-title"]}>
      <h1 className="inter-500">
        A <strong>proven</strong>
        <br /> process.
      </h1>
      <br />

      <p className={`inter-200 ${styles["subheader"]}`}>
        Planning is a crucial step to any business’s success. That’s why we
        follow the same guideline for each of our clients.
      </p>
    </div>
  );
}
