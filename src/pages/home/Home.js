//styles

import { useScreen } from "../../hooks/useScreen";
import stylesDesktop from "./HomeDesktop.module.css";
import stylesMobile from "./HomeMobile.module.css";

//components
import HeroText from "../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../components/desktop/hero-window/HeroWindow";
import NavBar from "../../components/desktop/navbar/NavBar";
import ManAtDesk from "../../components/desktop/man-at-desk/ManAtDesk";
import BrandTitle from "../../components/desktop/brand-title/BrandTitle";
import IPhone from "../../components/desktop/iphone/IPhone";

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    //********* DESKTOP *************//
    <div className={stylesDesktop.home}>
      {/*---------- HERO SECTION------- */}
      <div className={stylesDesktop["hero-section"]}>
        <NavBar />
        <div className={stylesDesktop["flex-wrapper-row"]}>
          <HeroText />
          <HeroWindow />
        </div>
      </div>

      {/*---------- BRAND SECTION------- */}
      <div className={stylesDesktop["brand-section"]}>
        <div className={stylesDesktop["brand-grid-wrapper"]}>
          <div className={stylesDesktop["ManAtDesk"]}>
            <ManAtDesk />
          </div>
          <div className={stylesDesktop["BrandTitle"]}>
            <BrandTitle />
          </div>
          <div className={stylesDesktop["IPhone"]}>
            <IPhone />
          </div>
        </div>
      </div>

      {/*---------- PROCESS SECTION------- */}
      <div className={stylesDesktop["process-section"]}>PROCESS SECTION </div>

      {/*---------- QUESTION SECTION------- */}
      <div className={stylesDesktop["question-section"]}>QUESTION SECTION </div>

      {/*---------- ACTION SECTION------- */}
      <div className={stylesDesktop["action-section"]}>ACTION SECTION </div>
    </div>
  ) : (
    <div className={stylesMobile.home}>NUTHIN</div>
  );
}
