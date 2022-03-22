import React from "react";

//styles
import styles from "./HeroSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import MNavBar from "../../../../components/mobile/navbar/NavBar";
import MHeroText from "../../../../components/mobile/hero-text/HeroText";

//assets
import Bubbles1 from "../../../../assets/images/mobileheaderbubbles1.svg";
import Bubbles2 from "../../../../assets/images/mobileheaderbubbles2.svg";
import Bubbles3 from "../../../../assets/images/mobileheaderbubbles3.svg";
import Bubbles4 from "../../../../assets/images/mobileheaderbubbles4.svg";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      <MNavBar />
      <MHeroText />
      <div className={styles["bubbles"]}>
        <img
          src={Bubbles1}
          className={`${styles["bubble"]} ${styles["bubble1"]}`}
        />
        <img
          src={Bubbles2}
          className={`${styles["bubble"]} ${styles["bubble2"]}`}
        />
        <img
          src={Bubbles3}
          className={`${styles["bubble"]} ${styles["bubble3"]}`}
        />
        <img
          src={Bubbles4}
          className={`${styles["bubble"]} ${styles["bubble4"]}`}
        />
      </div>
    </div>
  );
}
