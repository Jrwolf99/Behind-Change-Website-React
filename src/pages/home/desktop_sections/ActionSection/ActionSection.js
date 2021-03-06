import React from "react";

//styles
import styles from "./ActionSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import ActionText from "../../../../components/desktop/action-text/ActionText";

export default function ActionSection() {
  return (
    <div className={styles["action-section"]}>
      <ActionText />
    </div>
  );
}
