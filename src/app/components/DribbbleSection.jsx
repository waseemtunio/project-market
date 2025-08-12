import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export function DribbbleSection() {
  const secimgRef1 = useRef(null);
  const secimgRef2 = useRef(null);
  const secimgRef3 = useRef(null);
  const secimgRef4 = useRef(null);
  const secimgRef5 = useRef(null);
  const secimgRef6 = useRef(null);

  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  const imgRef3 = useRef(null);
  const imgRef4 = useRef(null);
  const imgRef5 = useRef(null);
  const imgRef6 = useRef(null);

  // Register plugins
  gsap.registerPlugin(ScrollTrigger);

  // media query
  const media = gsap.matchMedia();

  // img 1 animation
  //====================
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef1.current, {
          x: -350,
          rotate: -10,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef1.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef1.current, {
          x: -250,
          rotate: -10,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef1.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef1.current, {
          x: -50,
          rotate: -0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef1.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef1 }
  );

  // img 2 animation
  //====================
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef2.current, {
          x: 350,
          rotate: 10,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef2.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef2.current, {
          x: 250,
          rotate: 10,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef2.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef2.current, {
          x: 50,
          rotate: 0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef2.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef2 }
  );

  // img 3 animation
  //====================
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef3.current, {
          x: -350,
          rotate: -20,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef3.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef3.current, {
          x: -250,
          rotate: -20,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef3.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef3.current, {
          x: -350,
          rotate: -16,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef3.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef3 }
  );

  // img 4 animation
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef4.current, {
          x: 350,
          rotate: 20,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef4.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef4.current, {
          x: 250,
          rotate: 20,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef4.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef4.current, {
          x: 350,
          rotate: 16,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef4.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef4 }
  );

  // img 5 animation
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef5.current, {
          x: -350,
          rotate: -30,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef5.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef5.current, {
          x: -250,
          rotate: -30,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef5.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef5.current, {
          x: -50,
          rotate: -0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef5.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef5 }
  );

  // img 6 animation
  useGSAP(
    () => {
      // Desktop (1025px and up)
      media.add("(min-width: 1025px)", () => {
        gsap.to(imgRef6.current, {
          x: 350,
          rotate: 30,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef6.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Tablet (768px to 1024px)
      media.add("(min-width: 768px) and (max-width: 1024px)", () => {
        gsap.to(imgRef6.current, {
          x: 250,
          rotate: 30,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef6.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });

      // Mobile (767px and below)
      media.add("(max-width: 767px)", () => {
        gsap.to(imgRef6.current, {
          x: 50,
          rotate: 0,
          duration: 2,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: imgRef6.current,
            start: "top 70%",
            end: "top 70%",
            scrub: 2
          }
        });
      });
    },
    { scope: secimgRef6 }
  );
  return (
    <>
      <section className="dribbble-sec">
        <div className="container">
          <div className="dribbble-wrapper">
            <div className="dribbble-middle-text">
              <Image src="/images/Logo-wh.png" alt="Logo" width={300} height={100} priority />
              {/* <p className="text-2">
                Like a lion's roar echoing through
                <br />
                the jungle, a hint of our creative
                <br />
                minds emerges.
              </p>
              <div className="btn">
                <Link href="/about">Explore work</Link>
              </div> */}
            </div>
            <div className="dribbble-posts">
              <div className="dribbble-img" ref={secimgRef1}>
                <Image ref={imgRef1} src="/images/d1.webp" alt="" width={1000} height={700} />
              </div>
              <div className="dribbble-img" ref={secimgRef2}>
                <Image ref={imgRef2} src="/images/d2.webp" alt="" width={1000} height={700} />
              </div>
              <div className="dribbble-img" ref={secimgRef3}>
                <Image ref={imgRef3} src="/images/d3.webp" alt="" width={1000} height={700} />
              </div>
              <div className="dribbble-img" ref={secimgRef4}>
                <Image ref={imgRef4} src="/images/d4.webp" alt="" width={1000} height={700} />
              </div>
              <div className="dribbble-img" ref={secimgRef5}>
                <Image ref={imgRef5} src="/images/d5.webp" alt="" width={1000} height={700} />
              </div>
              <div className="dribbble-img" ref={secimgRef6}>
                <Image ref={imgRef6} src="/images/d6.webp" alt="" width={1000} height={700} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/*  */
