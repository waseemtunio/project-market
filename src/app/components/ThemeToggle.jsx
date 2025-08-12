"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import AnimatedButton from "./AnimatedButton";
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatedButton
      as="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="theme-toggle"
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </AnimatedButton>
  );
}
