"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
export function VideoSection() {
  const videoRef = useRef(null);
  const videoSecRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth > 1024); // Only desktop (larger than iPad)
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // Video animation - Scaling on scroll (only for desktop)
  useGSAP(
    () => {
      if (isDesktop) {
        gsap.from(videoRef.current, {
          y: -500,
          scale: 0.14,
          duration: 2,
          borderRadius: "50rem",
          scrollTrigger: {
            trigger: videoSecRef.current,
            start: "top 60%",
            end: "top 80%",
            toggleActions: "play none none none",
            scrub: 2,
            pin: true,
            markers: false,
            onEnter: () => {
              gsap.to(videoRef.current, {
                y: 0,
                scale: 1
              });
            }
          }
        });
      } else {
        gsap.from(videoRef.current, {
          y: 50,
          opacity: 0,
          duration: 2,
          delay: 3,
          ease: "Expo.easeOut"
        });
      }
    },
    { scope: videoSecRef, dependencies: [isDesktop] }
  );

  return (
    <>
      <section id="video-sec" ref={videoSecRef} className="video-sec">
        <div className="container">
          <div className="video-wrapper" ref={videoRef}>
            <video autoPlay loop muted>
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
}
