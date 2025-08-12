import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function CounterSection() {
  /* boxContainer */
  const boxLeftRef1 = useRef(null);
  const boxLeftRef2 = useRef(null);
  const boxRightRef1 = useRef(null);
  const boxRightRef2 = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // box1 animation
  useGSAP(
    () => {
      gsap.from(boxLeftRef1.current, {
        x: -350,
        opacity: 0,
        rotate: -10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: boxLeftRef1.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: boxLeftRef1 }
  );

  // box2 animation
  useGSAP(
    () => {
      gsap.from(boxLeftRef2.current, {
        x: -350,
        opacity: 0,
        rotate: -10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: boxLeftRef2.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: boxLeftRef2 }
  );

  // box3 animation
  useGSAP(
    () => {
      gsap.from(boxRightRef1.current, {
        x: 350,
        opacity: 0,
        rotate: 10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: boxRightRef1.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: boxRightRef1 }
  );

  // box4 animation
  useGSAP(
    () => {
      gsap.from(boxRightRef2.current, {
        x: 350,
        opacity: 0,
        rotate: 10,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: boxRightRef2.current,
          start: "top 70%",
          end: "bottom 90%",
          scrub: 2
        }
      });
    },
    { scope: boxRightRef1 }
  );

  return (
    <>
      <section className="counter-sec">
        <div className="container">
          <div className="flex-2box">
            <div className="flex-box a1">
              <div className="box2 sm1" ref={boxLeftRef1}>
                <h2 className="num">
                  10<sup>+</sup>
                </h2>
                <div className="text">
                  <h3>years of seo & brand experience</h3>
                </div>
              </div>
              <div className="box2 sm3" ref={boxLeftRef2}>
                <h2 className="num">
                  100<sup>+</sup>
                </h2>
                <div className="text">
                  <h3>video & drone projects delivered</h3>
                </div>
              </div>
            </div>

            <div className="flex-box a2">
              <div className="box2 sm2" ref={boxRightRef1}>
                <h2 className="num">
                  25<sup>+</sup>
                </h2>
                <div className="text">
                  <h3>brands repositioned</h3>
                </div>
              </div>

              <div className="box2 sm4" ref={boxRightRef2}>
                <h2 className="num">
                  1<sup></sup>
                </h2>
                <div className="text">
                  <h3>goal your growth</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
