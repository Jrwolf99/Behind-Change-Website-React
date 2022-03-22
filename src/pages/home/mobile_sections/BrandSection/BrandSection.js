import React from "react";

//styles
import styles from "./BrandSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import MBrandTitle from "../../../../components/mobile/brand-title/BrandTitle";
import MBrandImessage from "../../../../components/mobile/brand-imessage/BrandImessage";

export default function BrandSection() {
  return (
    <div className={styles["brand-section"]}>
      <MBrandTitle />
      <MBrandImessage />
    </div>
  );
}
