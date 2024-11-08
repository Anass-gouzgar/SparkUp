"use client"

import { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <aside className="fixed bottom-4 right-4 z-50">
          <button
            onClick={scrollToTop}
            className="rounded-full bg-black p-3 text-white hover:bg-gray-800"
          >
            👆
          </button>
        </aside>
      )}
    </>
  );
}
