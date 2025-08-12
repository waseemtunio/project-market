"use client";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
export default function Loading() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div className="loading-wrapper">
      {showContent ? (
        <p>Content Loaded!</p>
      ) : (
        <ClockLoader
          color="var(--primary)" // Using the CSS variable for color
          size={100} // Customize the size
          cssOverride={{
            borderColor: "var(--primary)" // Also apply it to the border
          }}
        />
      )}
    </div>
  );
}
