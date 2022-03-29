import React from "react";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form className={styles["contact-form"]}>
      <label>
        Preferred Name:
        <input></input>
      </label>
      <label>
        Email:
        <input type="email"></input>
      </label>
      <label>
        Website Link (if you have one):
        <input></input>
      </label>
      <button>Send</button>
    </form>
  );
}
