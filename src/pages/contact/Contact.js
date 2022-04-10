import React from "react";

import styles from "./Contact.module.css";
import "../../globalstyles/typography.css";



//Desktop Components
import ContactForm from "../../components/desktop/contact-form/ContactForm";
import NavBar from "../../components/desktop/navbar/NavBar";

//Mobile Components
import MNavBar from "../../components/mobile/navbar/NavBar"



//assets
import Bubbles1 from "../../assets/images/DBubble1.svg";
import Bubbles2 from "../../assets/images/DBubble2.svg";
import Bubbles3 from "../../assets/images/DBubble3.svg";
import Bubbles4 from "../../assets/images/DBubble4.svg";
import Rocket from "../../assets/images/rocket.png";





import { motion } from "framer-motion";
import { ContactVariants } from "../../animations/ContactVariants";
import { RocketVariants } from "../../animations/RocketVariants";
import { FadeVariants } from "../../animations/FadeVariants";
import { useWindowSize } from "../../hooks/useWindowSize";




export default function Contact() {
  const [width, height] = useWindowSize();

  return width > 1000 ? (
    //********* DESKTOP *************//
    <div>
      <div className={styles["contact-page-gradient"]}>
        <motion.div
          className={styles["nav"]}
          variants={FadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <NavBar buttontype="proposal" />
        </motion.div>
        <motion.div
          className={styles["rocket"]}
          variants={RocketVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <img src={Rocket} alt="a rocket" />
        </motion.div>
        <motion.div
          className={styles["contact-page"]}
          variants={ContactVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >

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

          <div className={styles["contactheader"]}>
            <p className={styles["header"]}>
              Let's
              <br />
              <strong>Chat.</strong>
            </p>
            <ContactForm></ContactForm>

          </div>

        </motion.div>
      </div>
    </div>
  ) : (
    //********* MOBILE *************//
    <div>
      <div className={styles['mobile-contact-page-gradient']}>
        <MNavBar />
        <p className={styles["mobile-header"]}>
          Let's
          <br />
          <strong>Chat.</strong>
        </p>
        <div className={styles["mobile-contact"]}>
          <ContactForm></ContactForm>
        </div>


      </div>


    </div>
  );
}
