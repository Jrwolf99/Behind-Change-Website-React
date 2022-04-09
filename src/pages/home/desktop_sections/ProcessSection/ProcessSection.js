import React from "react";

//styles
import styles from "./ProcessSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import CartoonPhone from "../../../../components/desktop/cartoon-phone/CartoonPhone";
import InfoCard from "../../../../components/desktop/info-card/InfoCard";
import ProcessTitle from "../../../../components/desktop/process-title/ProcessTitle";

import { motion } from "framer-motion";
import { StaggerVariants } from "../../../../animations/StaggerVariants";
import { useInView } from "react-intersection-observer";

export default function ProcessSection() {
  const { ref, inView } = useInView();

  return (
    <div className={styles["process-section"]}>
      <CartoonPhone style={{ position: "absolute" }} />
      <motion.div
        className="flex-wrapper-column"
        variants={StaggerVariants}
        ref={ref}
        animate={inView ? "visible" : "hidden"}
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <div
          className="flex-wrapper-row"
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InfoCard>
            <h2 className="inter-600">Create</h2>
            <p className="inter-200">
              a holistic website / social media format that will grow your
              brand’s online identity.
            </p>
          </InfoCard>
          <ProcessTitle />
        </div>

        <InfoCard>
          <h2 className="inter-600">Maintain</h2>
          <p className="inter-200">
            your site’s responsiveness by updating features and repairing bugs.
          </p>
        </InfoCard>
        <div
          className="flex-wrapper-row"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div></div>
          <InfoCard>
            <h2 className="inter-600">Inform</h2>
            <p className="inter-200">
              you of the proper techniques to maintain / update your site
              independently.
            </p>
          </InfoCard>
        </div>
      </motion.div>
    </div>
  );
}
