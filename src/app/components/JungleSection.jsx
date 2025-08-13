"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useRef } from "react";
import AnimatedButton from "./AnimatedButton";
export function JungleSection({
  title1,
  title2,
  title3,
  description,
  btn_text,
  btn_link,
}) {
  const jungleSecRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

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
          trigger: text1Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2,
        },
      });
    },
    { scope: text1Ref }
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
          trigger: text2Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2,
        },
      });
    },
    { scope: text2Ref }
  );

  // Text 3 animation
  useGSAP(
    () => {
      gsap.from(text3Ref.current, {
        x: 100,
        duration: 2,
        ease: "power1.inOut",
        backgroundPositionX: "100%",
        scrollTrigger: {
          trigger: text3Ref.current,
          start: "top 50%",
          end: "bottom 70%",
          scrub: 2,
        },
      });
    },
    { scope: text3Ref }
  );
  return (
    <>
      <section className="jungle-sec" ref={jungleSecRef}>
        <h1 className="title-3 text-center">
          <span className="block sm1" ref={text1Ref}>
            {title1}
          </span>
          <span className="block sm2" ref={text2Ref}>
            {title2}
          </span>
          <span className="block sm3" ref={text3Ref}>
            {title3}
          </span>
        </h1>
        <p
          className="text-2 text-center"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {btn_link ? (
          <div className="btn">
            <AnimatedButton href={btn_link}>{btn_text}</AnimatedButton>
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
