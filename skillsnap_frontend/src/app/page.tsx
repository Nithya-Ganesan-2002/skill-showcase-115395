"use client";
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Skills from "@/components/Skills";
import Projects, { Project } from "@/components/Projects";
import Experience, { ExperienceEntry } from "@/components/Experience";
import Certifications from "@/components/Certifications";
import SectionWrapper from "@/components/SectionWrapper";

// Example: The below hooks won't work at build-time because Next.js disables fs in client.
// Instead, pretend the data is statically imported for simplicity in early prototype.
import skillsData from "@/content/skills.json";
import certificationsData from "@/content/certifications.json";

// Simulate Markdown import via static JSON for demo. Replace with loader at build-time for prod.
const projectsData: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio built with Next.js to showcase skills and experience.",
    link: "https://portfolio.example.com",
    tags: ["Next.js", "Responsive", "Frontend"],
  },
  {
    title: "Open Source CLI Tool",
    description:
      "CLI tool for automating project scaffolding and deployment, with plugin support.",
    tags: ["Node.js", "CLI", "Automation"],
  },
];

const experienceData: ExperienceEntry[] = [
  {
    company: "Tech Corp",
    role: "Frontend Developer",
    period: "2021 - Present",
    description:
      "Led modern UI development on SaaS products, optimized for performance and accessibility.",
  },
  {
    company: "StartupLab",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description:
      "Built and maintained serverless APIs and implemented CI/CD pipelines for rapid deployment.",
  },
];

// Could be dynamic when using SSR/static build!

const SECTION_CONFIG = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
];

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="min-h-screen bg-background transition-colors">
      <NavBar
        sections={SECTION_CONFIG}
        currentSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <main className="pt-24 flex flex-col items-center max-w-3xl mx-auto gap-12 px-2 sm:px-0">
        <SectionWrapper sectionId="skills" isActive={activeSection === "skills"}>
          <Skills skillsData={skillsData} />
        </SectionWrapper>
        <SectionWrapper sectionId="projects" isActive={activeSection === "projects"}>
          <Projects projects={projectsData} />
        </SectionWrapper>
        <SectionWrapper
          sectionId="experience"
          isActive={activeSection === "experience"}
        >
          <Experience experience={experienceData} />
        </SectionWrapper>
        <SectionWrapper
          sectionId="certifications"
          isActive={activeSection === "certifications"}
        >
          <Certifications certs={certificationsData} />
        </SectionWrapper>
      </main>
      <footer className="mt-16 mb-2 text-center text-xs text-foreground/60">
        &copy; {new Date().getFullYear()} SkillSnap. All rights reserved.
      </footer>
    </div>
  );
}
