"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import AnimatedButton from "./AnimatedButton";

import FooterBottom from "./FooterBottom";
function Footer() {
  const recentWorkSecRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);
  // Text 1 animation
  useGSAP(
    () => {
      gsap.from(text1Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: recentWorkSecRef.current,
          /*  markers: true, */
          start: "top 70%",
          end: "bottom 100%",
          scrub: 2,
        },
      });
    },
    { scope: recentWorkSecRef }
  );

  // Text 2 animation
  useGSAP(
    () => {
      gsap.from(text2Ref.current, {
        x: -100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: recentWorkSecRef.current,
          /*      markers: true, */
          start: "top 70%",
          end: "bottom 100%",
          scrub: 2,
        },
      });
    },
    { scope: recentWorkSecRef }
  );
  return (
    <>
      <section className="recent-work-sec" ref={recentWorkSecRef}>
        <div className="container">
          <div className="flex-box">
            <div className="text">
              <h3 className="title-3 text-left">
                <span className="block sm1" ref={text1Ref}>
                  ready to get
                </span>
                <span className="block sm2" ref={text2Ref}>
                  trusted?
                </span>
              </h3>
            </div>
            <div className="btn">
              <AnimatedButton href="/about">Start Your Project</AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="boxa">
            <a className="f-link sm1" href="">
              <p className="ft1">Email</p>
              <p className="ft2">info@market-target.com</p>
            </a>
            <a className="f-link sm2" href="">
              <p className="ft1">Call</p>
              <p className="ft2">+31 6 22750959</p>
            </a>
            <a className="f-link sm4" href="">
              <p className="ft1">Address</p>
              <p className="ft2">
                Based in the Netherlands, <br /> serving clients worldwide
              </p>
            </a>
          </div>
        </div>
      </footer>

      <FooterBottom />
    </>
  );
}

export default Footer;
