"use client";
import React from "react";

// PUBLIC_INTERFACE
export default function NavBar({
  sections,
  currentSection,
  onSectionChange,
}: {
  sections: { label: string; id: string }[];
  currentSection: string;
  onSectionChange: (id: string) => void;
}) {
  return (
    <nav
      className="w-full py-4 px-2 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-black/10 dark:border-white/15 fixed top-0 z-30"
      aria-label="Main navigation"
    >
      <div className="text-xl font-bold tracking-wide text-primary">
        SkillSnap
      </div>
      <ul className="flex gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              className={`transition-colors px-3 py-1 rounded-full font-mono text-sm ${
                section.id === currentSection
                  ? "bg-accent text-background font-bold"
                  : "hover:bg-secondary/20 text-foreground"
              }`}
              onClick={() => onSectionChange(section.id)}
              aria-current={section.id === currentSection ? "page" : undefined}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
