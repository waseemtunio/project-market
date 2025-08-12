"use client";
import { useEffect, useRef } from "react";

export default function ClickSound() {
  const clickSoundRef = useRef(null);

  useEffect(() => {
    const handleClick = () => {
      if (clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.play();
      }
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <audio ref={clickSoundRef} src="/audio/click-sound.mp3" preload="auto" />
  );
}
