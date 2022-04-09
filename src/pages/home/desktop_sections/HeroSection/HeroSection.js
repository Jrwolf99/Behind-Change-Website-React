import React from "react";

//styles
import styles from "./HeroSection.module.css";
import "../../../../globalstyles/utility.css";
//components
import NavBar from "../../../../components/desktop/navbar/NavBar";
import HeroText from "../../../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../../../components/desktop/hero-window/HeroWindow";
import { motion } from "framer-motion";
import { FadeVariants } from "../../../../animations/FadeVariants";

export default function HeroSection() {
  return (
    <div
      className={styles["hero-section"]}
      variants={FadeVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={FadeVariants} initial="hidden" animate="visible">
        <NavBar />
      </motion.div>
      <motion.div
        variants={FadeVariants}
        initial="hidden"
        animate="visible"
        className="flex-wrapper-row"
        style={{ justifyContent: "space-around", alignItems: "flex-start" }}
      >
        <HeroText />
        <HeroWindow />
        <div className={styles["ellipse"]} />
      </motion.div>
    </div>
  );
}
