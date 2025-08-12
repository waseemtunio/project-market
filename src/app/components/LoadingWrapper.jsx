"use client";
import { useEffect, useState } from "react";
import Loading from "./Loading"; // ✅ Import Loading Component

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Show Loading for 3 seconds
  }, []);

  return isLoading ? <Loading /> : children;
}
