import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
export function PageTitle() {
  /* 
    recentWorkSecRef
    */
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
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
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
          start: "top 60%",
          end: "bottom 70%",
          scrub: 2
        }
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
                  partner
                </span>
                <span className="block sm2" ref={text2Ref}>
                  love
                </span>
              </h3>
            </div>
            <div className="btn">
              <p className="text-2">
                Take heed, as the
                <br />
                lion's roar in our client
                <br />
                reviews resounds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
