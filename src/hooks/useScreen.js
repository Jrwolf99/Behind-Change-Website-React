import { useContext } from "react";
import { ScreenContext } from "../context/ScreenContext";

export const useScreen = () => {
  const context = useContext(ScreenContext);

  if (context === undefined) {
    throw new Error("useScreen must be used inside a ScreenProvider");
  }

  return context;
};
