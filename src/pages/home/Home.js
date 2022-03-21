//styles
import { useScreen } from "../../hooks/useScreen";
import styles from "./Home.module.css";
import "../../globalstyles/typography.css";

//sections
import HeroSection from "./desktop_sections/HeroSection/HeroSection";
import BrandSection from "./desktop_sections/BrandSection/BrandSection";
import ProcessSection from "./desktop_sections/ProcessSection/ProcessSection";
import ActionSection from "./desktop_sections/ActionSection/ActionSection";

//mobile components

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    //********* DESKTOP *************//
    <div>
      <HeroSection />
      <BrandSection />
      <ProcessSection />
      <ActionSection />
    </div>
  ) : (
    //********* MOBILE *************//
    <div></div>
  );
}
