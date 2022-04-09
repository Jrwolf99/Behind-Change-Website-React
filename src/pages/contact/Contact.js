import React from "react";

import styles from "./Contact.module.css";
import "../../globalstyles/typography.css";

import ContactForm from "../../components/desktop/contact-form/ContactForm";
import NavBar from "../../components/desktop/navbar/NavBar";

//assets
import Bubbles1 from "../../assets/images/DBubble1.svg";
import Bubbles2 from "../../assets/images/DBubble2.svg";
import Bubbles3 from "../../assets/images/DBubble3.svg";
import Bubbles4 from "../../assets/images/DBubble4.svg";
import Rocket from "../../assets/images/rocket.png";

import { motion } from "framer-motion";
import { contactVarients } from "./animation-varients/contactVarients";
import { rocketVarients } from "./animation-varients/rocketVarients";

export default function Contact() {
  return (
    <div className={styles["contact-page-gradient"]}>
      <div className={styles["nav"]}>
        <NavBar buttontype="proposal" />
      </div>

      <motion.div
        className={styles["rocket"]}
        variants={rocketVarients}
        exit="exit"
      >
        <img src={Rocket} alt="a rocket" />
      </motion.div>

      <motion.div
        className={styles["contact-page"]}
        variants={contactVarients}
        initial="hidden"
        animation="visible"
        exit="exit"
      >
        <p className={styles["header"]}>
          Let's
          <br />
          <strong>Chat.</strong>
        </p>
        <ContactForm></ContactForm>

        <div className={styles["bubbles"]}>
          <img
            src={Bubbles1}
            className={`${styles["bubble"]} ${styles["bubble1"]}`}
            alt="bubbles on header for mobile"
          />
          <img
            src={Bubbles2}
            className={`${styles["bubble"]} ${styles["bubble2"]}`}
            alt="bubbles on header for mobile"
          />
          <img
            src={Bubbles3}
            className={`${styles["bubble"]} ${styles["bubble3"]}`}
            alt="bubbles on header for mobile"
          />
          <div></div>
          <img
            src={Bubbles4}
            className={`${styles["bubble"]} ${styles["bubble4"]}`}
            alt="bubbles on header for mobile"
          />
        </div>
      </motion.div>
    </div>
  );
}
