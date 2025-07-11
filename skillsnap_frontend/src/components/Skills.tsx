import React from "react";

// PUBLIC_INTERFACE
export default function Skills({
  skillsData,
}: {
  skillsData: { category: string; skills: string[] }[];
}) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Skills</h2>
      <div className="flex flex-wrap gap-8">
        {skillsData.map((cat) => (
          <div key={cat.category}>
            <h3 className="text-lg font-bold mb-2 text-secondary">{cat.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-2 py-1 bg-accent/10 text-accent rounded-md font-mono text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
