import React from "react";

//styles
import styles from "./HeroSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import NavBar from "../../../../components/desktop/navbar/NavBar";
import HeroText from "../../../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../../../components/desktop/hero-window/HeroWindow";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      <NavBar />
      <div
        className="flex-wrapper-row"
        style={{ justifyContent: "space-around", alignItems: "flex-start" }}
      >
        <HeroText />
        <HeroWindow />
        <div className={styles["ellipse"]} />
      </div>
    </div>
  );
}
