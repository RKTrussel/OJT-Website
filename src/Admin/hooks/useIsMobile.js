import { useState, useEffect } from "react";

// ─── useIsMobile Hook ─────────────────────────────────────
// Returns true when the viewport width is less than 768px.
// Re-evaluates on window resize.
export function useIsMobile() {
  const [m, setM] = useState(window.innerWidth < 768);
  useEffect(() => {
    const fn = () => setM(window.innerWidth < 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return m;
}
