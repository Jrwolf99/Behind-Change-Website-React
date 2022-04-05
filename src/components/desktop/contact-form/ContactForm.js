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
      <input
        type="hidden"
        name="_cc"
        value="jrwolf99@outlook.com,tbg101098@hotmail.com"
      />

      <label>
        Preferred Name:
        <input type="text" id="name" name="name" />
      </label>
      <label>
        Email:
        <input type="email" id="email" name="email" />
      </label>
      <label>
        Website Link (if you have one):
        <input type="text" id="website" name="website" />
      </label>
      <label>
        A note:
        <input type="text" id="note" name="note" />
      </label>
      <button>Send</button>
    </form>
  );
}
