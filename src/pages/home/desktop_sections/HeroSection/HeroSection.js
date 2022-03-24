import React from "react";

//styles
import styles from "./HeroSection.module.css";
import "../../../../globalstyles/utility.css";

//components
import NavBar from "../../../../components/desktop/navbar/NavBar";
import HeroText from "../../../../components/desktop/hero-text/HeroText";
import HeroWindow from "../../../../components/desktop/hero-window/HeroWindow";
import MyCanvas from "../../../../components/tools/canvas/Canvas";

export default function HeroSection() {
  const drawDashLine = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.setLineDash([5, 15]);
    ctx.moveTo(0, 50);
    ctx.lineTo(300, 50);
    ctx.stroke();
  };

  return (
    <div className={styles["hero-section"]}>
      {/* <MyCanvas className={styles["dash-line"]} draw={drawDashLine} /> */}
      <NavBar />
      <div
        className="flex-wrapper-row"
        style={{ justifyContent: "space-between", alignItems: "flex-start" }}
      >
        <HeroText />
        <HeroWindow />
      </div>
    </div>
  );
}
