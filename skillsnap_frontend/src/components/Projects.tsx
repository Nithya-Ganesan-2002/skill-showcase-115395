import React from "react";

// Project type
export type Project = {
  title: string;
  description: string;
  link?: string;
  tags?: string[];
};

// PUBLIC_INTERFACE
export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.title} className="border border-secondary/20 rounded-lg p-4 bg-background hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-2 text-secondary">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <p className="mb-2">{project.description}</p>
            {project.tags && (
              <ul className="flex flex-wrap gap-2 text-xs text-accent">
                {project.tags.map((tag) => (
                  <li key={tag} className="bg-accent/10 px-2 rounded">{tag}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
