"use client";

import { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

const getCSSVariable = (name) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function AnimatedButton({
  href = null,
  as = "div", // 'div' | 'button' | 'link'
  children,
  className = "",
  cursor = "transparent",
  onClick = null,
  style = {},
  type = "button", // Only for <button>
}) {
  const btnRef = useRef(null);

  const handleHover = () => {
    gsap.to(btnRef.current, {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleClick = (e) => {
    gsap.fromTo(
      btnRef.current,
      { scale: 0.95 },
      { scale: 1, duration: 0.3, ease: "power2.out" }
    );
    if (onClick) onClick(e);
  };

  const sharedProps = {
    ref: btnRef,
    onMouseEnter: handleHover,
    onMouseLeave: handleLeave,
    onClick: handleClick,
    className: `animated-btn hover-target ${className}`,
    "data-cursor": cursor,
    style: {
      cursor: "pointer",
      ...style,
    },
  };

  if (href) {
    return (
      <Link href={href} {...sharedProps}>
        {children}
      </Link>
    );
  }

  if (as === "button") {
    return (
      <button type={type} {...sharedProps}>
        {children}
      </button>
    );
  }

  // Default fallback: div
  return <div {...sharedProps}>{children}</div>;
}
