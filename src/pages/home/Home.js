//styles

import { useScreen } from "../../hooks/useScreen";
import stylesDesktop from "./HomeDesktop.module.css";
import stylesMobile from "./HomeMobile.module.css";
import "../../globalstyles/typography.css";

//components
import HeroText from "../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../components/desktop/hero-window/HeroWindow";
import NavBar from "../../components/desktop/navbar/NavBar";
import ManAtDesk from "../../components/desktop/man-at-desk/ManAtDesk";
import BrandTitle from "../../components/desktop/brand-title/BrandTitle";
import IPhone from "../../components/desktop/iphone/IPhone";
import InfoCard from "../../components/desktop/info-card/InfoCard";
import ProcessTitle from "../../components/desktop/process-title/ProcessTitle";
import CartoonPhone from "../../components/desktop/cartoon-phone/CartoonPhone";
import QuestionGrid from "../../components/desktop/question-grid/QuestionGrid";
import ActionText from "../../components/desktop/action-text/ActionText";

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    //********* DESKTOP *************//
    <div className={stylesDesktop.home}>
      {/*---------- HERO SECTION------- */}

      <div className={stylesDesktop["hero-section"]}>
        <NavBar />

        <div
          className={stylesDesktop["flex-wrapper-row"]}
          style={{ justifyContent: "space-between", alignItems: "flex-start" }}
        >
          <HeroText />
          <HeroWindow />
        </div>
      </div>

      {/*---------- BRAND SECTION------- */}
      <div className={stylesDesktop["brand-section"]}>
        <div className={stylesDesktop["BrandTitle"]}>
          <BrandTitle />
        </div>

        <div
          className={stylesDesktop["flex-wrapper-row"]}
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <div className={stylesDesktop["ManAtDesk"]}>
            <ManAtDesk />
          </div>
          <div className={stylesDesktop["IPhone"]}>
            <IPhone />
          </div>
        </div>
      </div>

      {/*---------- PROCESS SECTION------- */}
      <div className={stylesDesktop["process-section"]}>
        <CartoonPhone style={{ position: "absolute" }} />

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
              your site’s responsiveness by updating features and repairing
              bugs.
            </p>
          </InfoCard>
          <div
            className={stylesDesktop["flex-wrapper-row"]}
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
        </div>
      </div>

      {/*---------- QUESTION SECTION------- */}
      <div className={stylesDesktop["question-section"]}>
        <QuestionGrid />
      </div>

      {/*---------- ACTION SECTION------- */}
      <div className={stylesDesktop["action-section"]}>
        <ActionText />
      </div>
    </div>
  ) : (
    <div className={stylesMobile.home}>NUTHIN</div>
  );
}
