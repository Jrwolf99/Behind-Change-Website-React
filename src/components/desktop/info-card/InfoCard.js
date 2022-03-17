import React from "react";

import styles from "./InfoCard.module.css";

export default function InfoCard({ children }) {
  return <div className={styles["myInfoCard"]}>{children}</div>;
}
