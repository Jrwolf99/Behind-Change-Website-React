import React from "react";

//styles
import "../../../globalstyles/typography.css";
import styles from "./BrandImessage.module.css";

export default function BrandImessage() {
  return (
    <div className={styles["imessage"]}>
      <div className={`${styles["textbubble--1"]} ${styles["textbubble"]}`}>
        <p className={styles["font1"]}>So what is Behind Change?</p>
      </div>
      <div className={`${styles["textbubble--2"]} ${styles["textbubble"]}`}>
        <p className={styles["font2"]}>
          Behind Change is an organization established to help non-profits /
          positive impact organizations expand their online presence. We extend
          our no-cost services to you so that together this world becomes a
          brighter place!
        </p>
      </div>
    </div>
  );
}
