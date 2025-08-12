"use client";

import { useEffect } from "react";

export default function ClientFluidLoader() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/fluid-simulation.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.initFluid === "function") {
        window.initFluid();
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <canvas
      id="fluid"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        pointerEvents: "none",
      }}
    />
  );
}
