import React, { useRef, useEffect, useCallback } from "react";
import useCanvas from "../../../hooks/useCanvas";

// https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

export default function MyCanvas(props) {
  const { draw, ...rest } = props;

  const canvasRef = useCanvas(draw);

  return <canvas ref={canvasRef} {...rest}></canvas>;
}
