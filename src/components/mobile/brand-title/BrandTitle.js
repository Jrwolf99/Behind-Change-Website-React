import React from "react";

//styles
import "../../../globalstyles/typography.css";
import styles from "./BrandTitle.module.css";

export default function BrandTitle() {
  return (
    <div className={styles["brand-title"]}>
      <p className={`inter-200 ${styles["our"]}`}>Our </p>
      <p className="permanentmarker-400">Brand</p>

      <div className={styles["iphone-wrapper"]}>
        <div
          className={`${styles["imessage-textbubble--1"]} ${styles["imessage-textbubble"]}`}
        >
          <p className={styles["text_bubble-font1"]}>
            So what is Behind Change?
          </p>
        </div>
        <div
          className={`${styles["imessage-textbubble--2"]} ${styles["imessage-textbubble"]}`}
        >
          <p className={styles["text_bubble-font2"]}>
            Behind Change is an organization established to help non-profits /
            positive impact organizations expand their online presence. We
            extend our no-cost services to you so that together this world
            becomes a brighter place!
          </p>
        </div>
      </div>
    </div>
  );
}
