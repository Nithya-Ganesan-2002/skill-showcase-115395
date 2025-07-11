import React from "react";

// PUBLIC_INTERFACE
export type Certification = {
  name: string;
  issuer: string;
  year: string;
  url?: string;
};

export default function Certifications({ certs }: { certs: Certification[] }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-primary">Certifications</h2>
      <ul className="flex flex-wrap gap-4">
        {certs.map((cert) => (
          <li key={cert.name + cert.issuer} className="border px-4 py-2 rounded bg-background flex flex-col gap-1 shadow-sm">
            <span className="font-bold text-accent">{cert.name}</span>
            <span className="text-sm text-secondary">{cert.issuer}</span>
            <span className="text-xs">{cert.year}</span>
            {cert.url && (
              <a href={cert.url} className="underline text-primary text-xs" target="_blank" rel="noopener noreferrer">
                Verify
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
