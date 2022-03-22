import React from "react";

//styles
import "../../../globalstyles/typography.css";
import styles from "./BrandTitle.module.css";

export default function BrandTitle() {
  return (
    <div className={styles["brand-title"]}>
      <p className={`inter-200 ${styles["our"]}`}>Our </p>
      <p className={`permanentmarker-400 ${styles["brand"]}`}>Brand</p>
    </div>
  );
}
