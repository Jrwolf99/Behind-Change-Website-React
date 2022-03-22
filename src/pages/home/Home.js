//styles
import { useScreen } from "../../hooks/useScreen";
import styles from "./Home.module.css";
import "../../globalstyles/typography.css";

//sections
import DHeroSection from "./desktop_sections/HeroSection/HeroSection";
import DBrandSection from "./desktop_sections/BrandSection/BrandSection";
import DProcessSection from "./desktop_sections/ProcessSection/ProcessSection";
import DActionSection from "./desktop_sections/ActionSection/ActionSection";
import DQuestionSection from "./desktop_sections/QuestionSection/QuestionSection";
import DFooter from "./desktop_sections/footer/Footer";

import MHeroSection from "./mobile_sections/HeroSection/HeroSection";
import MBrandSection from "./mobile_sections/BrandSection/BrandSection";
import MProcessSection from "./mobile_sections/ProcessSection/ProcessSection";
import MActionSection from "./mobile_sections/ActionSection/ActionSection";
import MQuestionSection from "./mobile_sections/QuestionSection/QuestionSection";
import MFooter from "./mobile_sections/footer/Footer";

//mobile components

export default function Home() {
  const { screenMode } = useScreen();
  return screenMode === "desktop" ? (
    //********* DESKTOP *************//
    <div>
      <DHeroSection />
      <DBrandSection />
      <DProcessSection />
      <DQuestionSection />
      <DActionSection />
      <DFooter />
    </div>
  ) : (
    //********* MOBILE *************//
    <div>
      <MHeroSection />
      <MBrandSection />
      <MProcessSection />
      <MQuestionSection />
      <MActionSection />
      <MFooter />
    </div>
  );
}
