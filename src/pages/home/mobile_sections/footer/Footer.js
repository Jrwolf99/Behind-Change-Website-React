import React from "react";

import styles from "./Footer.module.css";

//assets

export default function Footer() {
  return (
    <div className={styles["myFooter"]}>
      <div className={styles["logo"]}>
        <p className={`inter-200 ${styles["behind"]}`}>Behind |</p>
        <p className={`playfair-600 ${styles["change"]}`}>&nbsp;Change</p>
      </div>
      <p className={`inter-200 ${styles["rights"]}`}>All Rights Reserved</p>
    </div>
  );
}
