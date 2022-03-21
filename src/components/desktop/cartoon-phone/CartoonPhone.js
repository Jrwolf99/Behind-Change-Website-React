import React from "react";

import Cartoonphone from "../../../assets/images/cartoon-phone.png";

import styles from "./CartoonPhone.module.css";

export default function CartoonPhone() {
  return (
    <img
      src={Cartoonphone}
      alt="A Cartoon Phone"
      className={styles["cartoon-phone"]}
    />
  );
}
