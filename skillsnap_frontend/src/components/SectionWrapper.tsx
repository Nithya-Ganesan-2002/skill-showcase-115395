"use client";
import React, { useRef, useEffect } from "react";

// PUBLIC_INTERFACE
export default function SectionWrapper({
  children,
  sectionId,
  isActive,
}: {
  children: React.ReactNode;
  sectionId: string;
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Animate on appear/change
  useEffect(() => {
    if (isActive && ref.current) {
      ref.current.style.opacity = "0";
      ref.current.style.transform = "translateY(40px)";
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transition = "opacity 0.5s, transform 0.5s";
          ref.current.style.opacity = "1";
          ref.current.style.transform = "translateY(0)";
        }
      }, 5);
    }
  }, [isActive]);

  return (
    <section
      id={sectionId}
      ref={ref}
      className={`min-h-[60vh] py-8 transition-opacity transition-transform duration-500 ${
        isActive ? "block" : "hidden"
      }`}
      tabIndex={-1}
    >
      {children}
    </section>
  );
}
