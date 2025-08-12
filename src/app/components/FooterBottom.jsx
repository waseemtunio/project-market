"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";

export default function FooterTorchSpot({
  bgSrc = "",
  textSrc = "/images/foooter-logo.webp",
  height = 300,
  cursorSrc = "/torch.png",
}) {
  const wrapRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    const ghost = cursorRef.current;
    if (!el || !ghost) return;

    // টাচ ডিভাইসে কার্সর না-লুকানো (UX-friendly)
    const isTouch = matchMedia("(pointer: coarse)").matches;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--spot-x", `${x}px`);
      el.style.setProperty("--spot-y", `${y}px`);
      ghost.style.transform = `translate(${x - 16}px, ${y - 16}px)`; // হটস্পট টিউন
    };

    const onEnter = () => {
      el.classList.add("is-active");
      if (!isTouch) ghost.style.opacity = "1";
    };

    const onLeave = () => {
      el.classList.remove("is-active");
      el.style.setProperty("--spot-x", `-9999px`);
      el.style.setProperty("--spot-y", `-9999px`);
      ghost.style.opacity = "0";
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <a className="hover-target" data-cursor="transparent">
      <section className="footer-bottom">
        <div className="torch-wrap" ref={wrapRef} style={{ height }}>
          {bgSrc && <img src={bgSrc} alt="" className="bg" />}

          <Image
            src={textSrc}
            alt="Dim text"
            className="text-dim"
            width={1920}
            height={158}
          />
          <Image
            src={textSrc}
            alt=""
            className="text-bright"
            aria-hidden="true"
            width={1920}
            height={158}
          />

          <div className="glow" aria-hidden="true" />

          {/* 🔦 ফলোয়িং কার্সর */}
          <Image
            ref={cursorRef}
            src={cursorSrc}
            alt=""
            className="cursor-ghost"
            aria-hidden="true"
            width={32}
            height={32}
          />
          <div className="torch-spot" />
          <div className="torch-spot-inner" />
        </div>

        {/* (A) গ্লোবাল রুল: চাইল্ড এলিমেন্ট গুলোতেও কার্সর লুকাও */}
        <style jsx global>{`
          .torch-wrap.is-active,
          .torch-wrap.is-active * {
            cursor: none !important;
          }

          /* টাচ ডিভাইসে সিস্টেম কার্সর হাইড করা লাগবে না */
          @media (pointer: coarse) {
            .torch-wrap.is-active,
            .torch-wrap.is-active * {
              cursor: auto !important;
            }
            .cursor-ghost {
              display: none !important;
            }
          }
        `}</style>
      </section>
    </a>
  );
}
