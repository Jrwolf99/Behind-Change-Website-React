import React from "react";

import styles from "./QuestionGrid.module.css";
import "../../../globalstyles/typography.css";

import Solutions from "./solutions/Solutions";
import Reach from "./reach/Reach";
import Abundance from "./abundance/Abundance";
import WebUsage from "./webusage/WebUsage";
import Accessibility from "./accessibility/Accessibility";
import Experience from "./experience/Experience";
import Cost from "./cost/Cost";
import Convinced from "./convinced/Convinced";
import CommonQuestions from "./common-questions/CommonQuestions";
import InnerGrid from "./inner-grid/InnerGrid";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StaggerVariants } from "../../../animations/StaggerVariants";

export default function QuestionGrid() {
  const { ref, inView } = useInView();

  return (
    <motion.div
      className={styles["questions-grid"]}
      ref={ref}
      variants={StaggerVariants}
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className={`${styles["one"]}`} variants={StaggerVariants}>
        <Solutions />
      </motion.div>
      <motion.div className={`${styles["two"]}`} variants={StaggerVariants}>
        <Reach />
      </motion.div>
      <motion.div className={`${styles["three"]}`} variants={StaggerVariants}>
        <Abundance />
      </motion.div>
      <motion.div className={`${styles["four"]}`} variants={StaggerVariants}>
        <WebUsage />
      </motion.div>
      <motion.div className={`${styles["five"]}`} variants={StaggerVariants}>
        <Accessibility />
      </motion.div>
      <motion.div className={`${styles["six"]}`} variants={StaggerVariants}>
        <Experience />
      </motion.div>
      <motion.div className={`${styles["seven"]}`} variants={StaggerVariants}>
        <Cost />
      </motion.div>
      <motion.div className={`${styles["eight"]}`} variants={StaggerVariants}>
        <Convinced />
      </motion.div>
      <motion.div className={`${styles["nine"]}`} variants={StaggerVariants}>
        <CommonQuestions />
      </motion.div>
      <motion.div className={`${styles["ten"]}`} variants={StaggerVariants}>
        <InnerGrid />
      </motion.div>
    </motion.div>
  );
}
