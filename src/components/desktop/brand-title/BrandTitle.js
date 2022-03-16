import React from "react";

//styles
import "../../../globalstyles/typography.css";
import styles from "./BrandTitle.module.css";

export default function BrandTitle() {
  return (
    <div className={styles["brand-title"]}>
      <p className="inter-500">Our</p>
      <p className="permanentmarker-400">
        Brand.
        <div></div>
      </p>
    </div>
  );
}
