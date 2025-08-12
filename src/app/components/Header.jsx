"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { AudioPlayer } from "./AudioPlayer";
import { ThemeToggle } from "./ThemeToggle";
import AnimatedButton from "./AnimatedButton";
import gsap from "gsap";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkRefs = useRef([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMenuOpen) closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  const handleLinkHover = (index) => {
    gsap.to(linkRefs.current[index], {
      backgroundPosition: "100% 50%",
      scale: 1.05,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleLinkLeave = (index) => {
    gsap.to(linkRefs.current[index], {
      backgroundPosition: "0% 50%",
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <>
      <section className="header-wrapper">
        <div className="container">
          <header className="header">
            <Link href="/">
              <Image
                src="/images/Logo-wh.png"
                alt="Logo"
                width={200}
                height={60}
                priority
              />
            </Link>

            <div className="toggle-container">
              <ThemeToggle />
              <AudioPlayer />
            </div>

            <div className="header-controls">
              <button
                onClick={toggleMenu}
                className="menu-button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <span>{isMenuOpen ? "Close" : "Menu"}</span>
                <AnimatedButton style={{ borderRadius: "100%" }}>
                  <div className="menu-icon">
                    {isMenuOpen ? (
                      <RxCross1 style={{ fontSize: "1.25rem" }} />
                    ) : (
                      <RxHamburgerMenu style={{ fontSize: "1.25rem" }} />
                    )}
                  </div>
                </AnimatedButton>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMenuOpen ? "visible" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="menu-container">
          <div className="menu-wrapper">
            <nav className="menu-nav">
              <ul>
                <li>
                  <Link
                    href="/work"
                    className="title-1 menu-link"
                    ref={(el) => (linkRefs.current[0] = el)}
                    onClick={closeMenu}
                    onMouseEnter={() => handleLinkHover(0)}
                    onMouseLeave={() => handleLinkLeave(0)}
                  >
                    work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="title-1 menu-link"
                    ref={(el) => (linkRefs.current[1] = el)}
                    onClick={closeMenu}
                    onMouseEnter={() => handleLinkHover(1)}
                    onMouseLeave={() => handleLinkLeave(1)}
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="title-1 menu-link"
                    ref={(el) => (linkRefs.current[2] = el)}
                    onClick={closeMenu}
                    onMouseEnter={() => handleLinkHover(2)}
                    onMouseLeave={() => handleLinkLeave(2)}
                  >
                    services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="title-1 menu-link"
                    ref={(el) => (linkRefs.current[3] = el)}
                    onClick={closeMenu}
                    onMouseEnter={() => handleLinkHover(3)}
                    onMouseLeave={() => handleLinkLeave(3)}
                  >
                    team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="title-1 menu-link"
                    ref={(el) => (linkRefs.current[4] = el)}
                    onClick={closeMenu}
                    onMouseEnter={() => handleLinkHover(4)}
                    onMouseLeave={() => handleLinkLeave(4)}
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="menu-social">
              <div className="info">
                <a className="email" href="mailto:info@market-target.com">
                  info@market-target.com
                </a>
                <a href="tel:+31622750959">+31 6 22750959</a>
              </div>
              <div className="socials-m">
                {["linkedin", "instagram", "youtube1", "facebook"].map(
                  (platform) => (
                    <a className="s-item" href="#" key={platform}>
                      <Image
                        src={`/images/${platform}.svg`}
                        alt=""
                        width={64}
                        height={64}
                      />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`menu-overlay ${isMenuOpen ? "visible" : ""}`}
        onClick={closeMenu}
        aria-hidden={!isMenuOpen}
      />
    </>
  );
}

export default Header;
