import React from "react";

import styles from "./ProcessDetails.module.css";

export default function ProcessDetails() {
  return (
    <div className={styles["process-details"]}>
      <p>
        <strong>Create</strong> a holistic website / social media format that
        will grow your brand’s online identity.
      </p>
      <br />

      <p>
        <strong>Maintain</strong> your site’s responsiveness by repairing bugs.
      </p>
      <br />

      <p>
        <strong>Inform</strong> you of the proper techniques to maintain /
        update your site independently.
      </p>
    </div>
  );
}
