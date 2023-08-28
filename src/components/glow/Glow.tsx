/**
 * @file Glow.tsc
 * @fileoverview This handles the glow effect in the background of the website.
 */

import { useEffect, useState } from "react";
import { useMyContext } from "../../my-context";

export type TMousePos = {
  x: number;
  y: number;
};

const Glow: React.FC = () => {

  {/* Context for Global variables */}
  const context = useMyContext();

  {/* State variable to account for the mouse position on the screen */}
  const [mousePos, setMousePos] = useState<TMousePos>({ x: 0, y: 0 });

  const getColor = (): string => {
    if(context.currPage === 'Home'){
      return 'rgba(48, 35, 99, 0.15)';
    }
    if(context.currPage === 'Kratos') {
      return 'rgba(116, 19, 51, 0.10)';
    }
    if(context.currPage === 'CPHHA') {
      return 'rgba(37, 94, 17, 0.10)';
    }
    if(context.currPage === 'tellU') {
      return 'rgb(97, 219, 251, 0.05)';
    }
    return 'rgba(41, 59, 92, 0.10)';
  }

  /**
   * @description Adds a listener to track and set the mouse position
   */
  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  {/* "GLOW" effect CSS styling */}
  const gradientStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1000,
    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, ${getColor()}, transparent 80%)`
  };

  return <div style={gradientStyle}></div>;

};

export default Glow;