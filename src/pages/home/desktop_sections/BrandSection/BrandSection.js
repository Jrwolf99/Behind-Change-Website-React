import React from "react";

//styles
import styles from "./BrandSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import BrandTitle from "../../../../components/desktop/brand-title/BrandTitle";
import IPhone from "../../../../components/desktop/iphone/IPhone";
import ManAtDesk from "../../../../components/desktop/man-at-desk/ManAtDesk";

export default function BrandSection() {
  return (
    <div className={styles["brand-section"]}>
      <div className={styles["BrandTitle"]}>
        <BrandTitle />
      </div>
      <div
        className="flex-wrapper-row"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div className={styles["ManAtDesk"]}>
          <ManAtDesk />
        </div>
        <div className={styles["IPhone"]}>
          <IPhone />
        </div>
      </div>
    </div>
  );
}
