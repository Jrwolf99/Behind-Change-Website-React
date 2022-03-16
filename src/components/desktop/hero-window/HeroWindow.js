import React from "react";
import styles from "./HeroWindow.module.css";
import "../../../globalstyles/typography.css";

//assets
import WhiteFrame from "../../../assets/whiteframe.svg";
import WhiteFrameOutline from "../../../assets/whiteframe-outline.svg";
import GirlOnRocket from "../../../assets/Saly-1.svg";
import Bubbles from "../../../assets/bubbles.svg";

export default function HeroWindow() {
  return (
    <div className={styles["hero-window"]}>
      <img
        className={styles["whiteframe"]}
        src={WhiteFrame}
        alt="a white frame"
      />

      <img
        className={`${styles["whiteframe-outline"]} ${styles["outline1"]}`}
        src={WhiteFrameOutline}
        alt="a white frame outlne"
      />

      <img
        className={`${styles["whiteframe-outline"]} ${styles["outline2"]}`}
        src={WhiteFrameOutline}
        alt="a white frame outlne"
      />

      <img className={styles["bubbles"]} src={Bubbles} alt="Bubbles" />

      <img
        className={styles["girl-on-rocket"]}
        src={GirlOnRocket}
        alt="GirlOnRocket"
      />
    </div>
  );
}
