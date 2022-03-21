import React from "react";

//styles
import styles from "./HeroSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import MNavBar from "../../../../components/mobile/navbar/NavBar";
import MHeroText from "../../../../components/mobile/hero-text/HeroText";

export default function HeroSection() {
  return (
    <div className={styles["hero-section"]}>
      <MNavBar />
      <MHeroText />
    </div>
  );
}
