import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

//assets
import InstagramLogo from "../../../../assets/images/icons/Instagram.svg";
import FacebookLogo from "../../../../assets/images/icons/Facebook.svg";
import LinkedInLogo from "../../../../assets/images/icons/LinkedIn.svg";
import TwitterLogo from "../../../../assets/images/icons/Twitter.svg";

export default function Footer() {
  return (
    <div className={styles["myFooter"]}>
      <div className={styles["logo"]}>
        <p className={`inter-200 ${styles["behind"]}`}>Behind |</p>
        <p className={`playfair-600 ${styles["change"]}`}>&nbsp;Change</p>
      </div>

      <div className={`roboto-400 ${styles["links"]}`}>
        <Link to="">Home</Link>
        <Link to="">Previous Projects</Link>
        <Link to="">About</Link>
        <Link to="">Start a Proposal</Link>
      </div>

      <div className={`${styles["icons"]}`}>
        <img src={InstagramLogo} />
        <img src={FacebookLogo} />
        <img src={LinkedInLogo} />
        <img src={TwitterLogo} />
      </div>
    </div>
  );
}
