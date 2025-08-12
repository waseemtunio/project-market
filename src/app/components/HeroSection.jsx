// src/app/components/HeroSection.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { HiOutlineArrowSmDown } from "react-icons/hi";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import AnimatedButton from "./AnimatedButton";

export function HeroSection() {
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const textRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const heroWrapperRef = useRef(null);
  // title 1 animation

  // ✅ Add this helper function at the top of your component
  const getCSSVariable = (name) =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  /* 
translate: none; rotate: none; scale: none; filter: none; transform: translate(0px); opacity: 1; visibility: inherit;"  
  
  */
  useGSAP(
    () => {
      gsap.from(title1Ref.current, {
        opacity: 0,
        filter: "blur(5px)",
        transform:
          "translate(0%, 24%) translate3d(0px, 0px, 0px) rotateX(18deg) skew(-18deg)",
        duration: 2,
        delay: 0.5,
        ease: "Expo.easeOut",
      });
    },
    { scope: heroWrapperRef }
  );
  // title 2 animation
  useGSAP(
    () => {
      gsap.from(title2Ref.current, {
        opacity: 0,
        filter: "blur(5px)",
        transform:
          "translate(0%, 24%) translate3d(0px, 0px, 0px) rotateX(18deg) skew(-18deg)",
        duration: 2,
        delay: 1,
        ease: "Expo.easeOut",
      });
    },
    { scope: heroWrapperRef }
  );
  // text animation
  useGSAP(
    () => {
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 1.5,
        ease: "Expo.easeOut",
      });
    },
    { scope: heroWrapperRef }
  );
  // btn 1
  useGSAP(
    () => {
      gsap.from(btn1Ref.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 2,
        ease: "Expo.easeOut",
      });
    },
    { scope: heroWrapperRef }
  );
  // btn 2
  useGSAP(
    () => {
      gsap.from(btn2Ref.current, {
        y: 50,
        opacity: 0,
        duration: 2,
        delay: 2.5,
        ease: "Expo.easeOut",
      });
    },
    { scope: heroWrapperRef }
  );

  return (
    <>
      <section className="hero-wrapper" ref={heroWrapperRef}>
        <div className="container">
          <h1 className="title-1 text-center">
            <span ref={title1Ref} className="block">
              No Visibility.
            </span>
            <span ref={title2Ref} className="block">
              No Trust. No Leads.
            </span>
          </h1>
          <div className="text" ref={textRef}>
            <p className="text-center">
              They won't hire you if they can't find you — and visibility alone
              won't win their trust.
              <br /> Market Target helps service businesses rank higher, look
              sharper, and convert better with technical SEO,
              <br /> strategic branding, and high-impact video.
            </p>
            <div>
              <div className="scroll-next-sec">
                <AnimatedButton href="#video-sec">
                  <HiOutlineArrowSmDown />
                </AnimatedButton>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <div className="btn" ref={btn1Ref}>
              <AnimatedButton href="/work">View Our Work</AnimatedButton>
            </div>
            <div className="btn" ref={btn2Ref}>
              <AnimatedButton href="/about">Start Your Project</AnimatedButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
