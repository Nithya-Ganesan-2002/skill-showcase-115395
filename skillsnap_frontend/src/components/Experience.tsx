import React from "react";

// PUBLIC_INTERFACE
export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
};

// Experiences are listed chronologically
export default function Experience({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Experience</h2>
      <ul className="flex flex-col gap-6">
        {experience.map((job) => (
          <li key={job.company + job.role} className="border-l-4 border-accent pl-4">
            <div className="flex gap-2 items-center justify-between mb-1">
              <span className="font-bold text-secondary">{job.company}</span>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <div className="font-semibold">{job.role}</div>
            <p className="text-sm">{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
