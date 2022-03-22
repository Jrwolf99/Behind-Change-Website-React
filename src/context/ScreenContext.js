import { createContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

export function ScreenProvider({ children }) {
  const [screenMode, setScreenMode] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      console.log(screenWidth);
      screenWidth > 800 ? setScreenMode("desktop") : setScreenMode("mobile");
    };
    screenMode === null && handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, screenMode]);

  return (
    <ScreenContext.Provider value={{ screenMode }}>
      {children}
    </ScreenContext.Provider>
  );
}
