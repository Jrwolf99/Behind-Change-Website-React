import React from "react";

import styles from "./Contact.module.css";
import "../../globalstyles/typography.css";

import ContactForm from "../../components/desktop/contact-form/ContactForm";
import NavBar from "../../components/desktop/navbar/NavBar";

export default function Contact() {
  return (
    <div className={styles["contact-page-gradient"]}>
      <div className={styles["rocket-logo"]}>
        <div className={styles["nav"]}>
          <NavBar buttonclr="blue" />
        </div>

        <div className={styles["rocket"]}></div>
      </div>

      <div className={styles["contact-page"]}>
        <p className={styles["header"]}>
          Let's
          <br />
          <strong>Chat.</strong>
        </p>

        <ContactForm></ContactForm>
      </div>
    </div>
  );
}
