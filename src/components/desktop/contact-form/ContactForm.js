import React from "react";

import styles from "./ContactForm.module.css";

export default function ContactForm() {
  return (
    <form
      className={styles["contact-form"]}
      target="_blank"
      action="https://formsubmit.co/jrwolf@crimson.ua.edu"
      method="POST"
    >
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
      <label>
        A note:
        <input></input>
      </label>
      <button>Send</button>
    </form>
  );
}
