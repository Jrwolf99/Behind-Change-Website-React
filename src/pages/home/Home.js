//styles

import { useScreen } from "../../hooks/useScreen";
import stylesDesktop from "./HomeDesktop.module.css";
import stylesMobile from "./HomeMobile.module.css";

//components
import HeroText from "../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../components/desktop/hero-window/HeroWindow";
import NavBar from "../../components/desktop/navbar/NavBar";

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    <div className={stylesDesktop.home}>
      <div className={stylesDesktop["hero-section"]}>
        <NavBar />
        <div className={stylesDesktop["flex-wrapper-column"]}>
          <HeroText />
          <HeroWindow />
        </div>
      </div>

      <div className={stylesDesktop["brand-section"]}>
      </div>



    </div>
  ) : (
    <div className={stylesMobile.home}>NUTHIN</div>
  );
}
