//styles

import { useScreen } from "../../hooks/useScreen";
import stylesDesktop from "./HomeDesktop.module.css";
import stylesMobile from "./HomeMobile.module.css";
import "../../globalstyles/typography.css";

//desktop components
import D_HeroText from "../../components/desktop/hero-text/HeroText";
import D_HeroWindow from "../../components/desktop/hero-window/HeroWindow";
import D_NavBar from "../../components/desktop/navbar/NavBar";
import D_ManAtDesk from "../../components/desktop/man-at-desk/ManAtDesk";
import D_BrandTitle from "../../components/desktop/brand-title/BrandTitle";
import D_IPhone from "../../components/desktop/iphone/IPhone";
import D_InfoCard from "../../components/desktop/info-card/InfoCard";
import D_ProcessTitle from "../../components/desktop/process-title/ProcessTitle";
import D_CartoonPhone from "../../components/desktop/cartoon-phone/CartoonPhone";
import D_QuestionGrid from "../../components/desktop/question-grid/QuestionGrid";
import D_ActionText from "../../components/desktop/action-text/ActionText";

//mobile components

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    //********* DESKTOP *************//
    <div className={stylesDesktop.home}>
      {/*---------- HERO SECTION------- */}
      <div className={stylesDesktop["hero-section"]}>
        <D_NavBar />

        <div
          className={stylesDesktop["flex-wrapper-row"]}
          style={{ justifyContent: "space-between", alignItems: "flex-start" }}
        >
          <D_HeroText />
          <D_HeroWindow />
        </div>
      </div>

      {/*---------- BRAND SECTION------- */}
      <div className={stylesDesktop["brand-section"]}>
        <div className={stylesDesktop["BrandTitle"]}>
          <D_BrandTitle />
        </div>

        <div
          className={stylesDesktop["flex-wrapper-row"]}
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <div className={stylesDesktop["ManAtDesk"]}>
            <D_ManAtDesk />
          </div>
          <div className={stylesDesktop["IPhone"]}>
            <D_IPhone />
          </div>
        </div>
      </div>

      {/*---------- PROCESS SECTION------- */}
      <div className={stylesDesktop["process-section"]}>
        <D_CartoonPhone style={{ position: "absolute" }} />

        <div
          className={stylesDesktop["flex-wrapper-column"]}
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            gap: "100px",
          }}
        >
          <div
            className={stylesDesktop["flex-wrapper-row"]}
            style={{
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <D_InfoCard>
              <h2 className="inter-600">Create</h2>
              <p className="inter-200">
                a holistic website / social media format that will grow your
                brand’s online identity.
              </p>
            </D_InfoCard>
            <D_ProcessTitle />
          </div>

          <D_InfoCard>
            <h2 className="inter-600">Maintain</h2>
            <p className="inter-200">
              your site’s responsiveness by updating features and repairing
              bugs.
            </p>
          </D_InfoCard>
          <div
            className={stylesDesktop["flex-wrapper-row"]}
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div></div>
            <D_InfoCard>
              <h2 className="inter-600">Inform</h2>
              <p className="inter-200">
                you of the proper techniques to maintain / update your site
                independently.
              </p>
            </D_InfoCard>
          </div>
        </div>
      </div>

      {/*---------- QUESTION SECTION------- */}
      <div className={stylesDesktop["question-section"]}>
        <D_QuestionGrid />
      </div>

      {/*---------- ACTION SECTION------- */}
      <div className={stylesDesktop["action-section"]}>
        <D_ActionText />
      </div>
    </div>
  ) : (
    //********* MOBILE *************//
    <div className={stylesMobile.home}>
      {/*---------- HERO SECTION------- */}
      <div className={stylesMobile["hero-section"]}>hero</div>

      {/*---------- BRAND SECTION------- */}
      <div className={stylesMobile["brand-section"]}>
        <div className={stylesMobile["brand-title"]}>
          <D_BrandTitle />
        </div>
      </div>

      {/*---------- PROCESS SECTION------- */}
      <div className={stylesMobile["process-section"]}>process</div>

      {/*---------- QUESTION SECTION------- */}
      <div className={stylesMobile["question-section"]}>question</div>

      {/*---------- ACTION SECTION------- */}
      <div className={stylesMobile["action-section"]}>action</div>
    </div>
  );
}
