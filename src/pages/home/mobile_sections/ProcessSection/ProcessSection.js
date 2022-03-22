import React from "react";

//styles
import styles from "./ProcessSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import ProcessDetails from "../../../../components/mobile/process-details/ProcessDetails";
import ProcessTitle from "../../../../components/mobile/process-title/ProcessTitle";

//components

export default function ProcessSection() {
  return (
    <div className={`${styles["process-section"]} inter-200`}>
      <ProcessTitle />
      <ProcessDetails />
    </div>
  );
}
