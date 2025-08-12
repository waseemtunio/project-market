"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export function NewsTracker() {
  const ticker1Ref = useRef(null);
  const ticker2Ref = useRef(null);

  const animateTicker = (ref, reverse = false) => {
    const el = ref.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2; // Half because we duplicate below
    gsap.fromTo(
      el,
      { x: 0 },
      {
        x: reverse ? `+=${totalWidth}` : `-=${totalWidth}`,
        duration: totalWidth / 100, // Adjust speed
        ease: "none",
        repeat: -1,
      }
    );
  };

  useGSAP(() => {
    animateTicker(ticker1Ref, false); // Top ticker: left to right
    animateTicker(ticker2Ref, true); // Bottom ticker: right to left
  });

  const renderTexts = () => (
    <>
      {Array(10)
        .fill(
          "struggling to get leads? → seo. branding. video. let's fix that."
        )
        .map((text, idx) => (
          <span key={idx}>{text}</span>
        ))}
    </>
  );

  const renderTexts2 = () => (
    <>
      {Array(10)
        .fill(
          "struggling to get leads? → seo. branding. video. let's fix that."
        )
        .map((text, idx) => (
          <span key={idx}>{text}</span>
        ))}
    </>
  );

  return (
    <section className="news-tracker">
      <div className="ticker-wrapper">
        <div className="ticker">
          <h2 className="ticker__run title-3" ref={ticker1Ref}>
            {renderTexts()}
            {renderTexts()}
          </h2>
        </div>

        <div className="ticker reverse">
          <h2 className="ticker__run title-3" ref={ticker2Ref}>
            {renderTexts2()}
            {renderTexts2()}
          </h2>
        </div>
      </div>
    </section>
  );
}
