import React from "react";
import { useToggle } from "../../../hooks/useToggle";

import styles from "./ContactForm.module.css";

import { motion } from "framer-motion";

import ArrowBlue from "../../../assets/images/Arrowblue.svg";

export default function ContactForm() {
  const [isHovered, toggleHover, setIsHovered] = useToggle();

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
      <button
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p>SEND</p>

        <motion.svg
          width="93"
          height="21"
          viewBox="0 0 353 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isHovered ? { x: 55, opacity: 1 } : { opacity: 0 }}
        >
          <path d="M212 10.5H353" stroke="#5BCEFF" stroke-width="20" />
          <path d="M92 10.5H181" stroke="#5BCEFF" stroke-width="20" />
          <path d="M0.997314 10.5H60.9973" stroke="#5BCEFF" stroke-width="20" />
        </motion.svg>

        <motion.svg
          width="60"
          viewBox="0 0 210 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={isHovered ? { x: 45 } : { x: -100 }}
        >
          <path
            d="M207.071 81.0711C210.976 77.1658 210.976 70.8342 207.071 66.9289L143.431 3.28932C139.526 -0.615921 133.195 -0.615921 129.289 3.28932C125.384 7.19456 125.384 13.5262 129.289 17.4315L185.858 74L129.289 130.569C125.384 134.474 125.384 140.805 129.289 144.711C133.195 148.616 139.526 148.616 143.431 144.711L207.071 81.0711ZM0 84L200 84V64L0 64L0 84Z"
            fill="#5BCEFF"
          />
        </motion.svg>
      </button>
    </form>
  );
}
