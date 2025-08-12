"use client";
import { useEffect } from "react";
import gsap from "gsap";

// ✅ Add this helper function to access CSS variable values
const getCSSVariable = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function CursorFollower() {
  useEffect(() => {
    const follower = document.getElementById("cursor-follower");

    const moveFollower = (e) => {
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveFollower);
    return () => window.removeEventListener("mousemove", moveFollower);
  }, []);

  useEffect(() => {
    const follower = document.getElementById("cursor-follower");

    // ✅ Mouse enter (delegated)
    const handleMouseOver = (e) => {
      const target = e.target.closest(".hover-target");
      if (!target) return;

      const primary = getCSSVariable("--primary");
      const foreground = getCSSVariable("--foreground");

      const type = target.getAttribute("data-cursor");

      if (type === "transparent") {
        gsap.to(follower, {
          backgroundColor: "transparent",
          scale: 2,
          duration: 0.3,
        });
      } else {
        gsap.to(follower, {
          backgroundColor: primary,
          scale: 1.5,
          duration: 0.3,
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(".hover-target");
      if (!target) return;

      const primary = getCSSVariable("--primary");

      gsap.to(follower, {
        backgroundColor: primary,
        border: "none",
        scale: 1,
        duration: 0.3,
      });
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div id="cursor-follower" />;
}
