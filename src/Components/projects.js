import Section from "./section";

const projects = [
  {
    title: "DRISHTI: Traffic Intelligence Platform",
    description:
      "AI triage system for Bengaluru Traffic Police; XGBoost model trained on 2,718 incidents predicts priority, clearance time, and deployment needs across 9 resource types.",
    tech: ["FastAPI", "Next.js", "XGBoost"]
  },
  {
    title: "Secure Tender Document Ingestion Agent",
    description:
      "Windows service with a durable SQLite-backed queue and resumable multipart S3 uploads — automatic failure recovery, zero manual retries.",
    tech: ["TypeScript", "AWS S3", "SQLite"]
  },
  {
    title: "Sosyo — Privacy-First Social Platform",
    description:
      "Location-aware social platform with real-time messaging, presence tracking, and Redis-backed caching for sub-second updates.",
    tech: ["Express.js", "PostgreSQL", "Redis"]
  }
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="// projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-surface border border-border rounded-lg p-5 transition-all duration-150 hover:border-text-secondary hover:-translate-y-0.5"
          >
            <h3 className="font-semibold text-base text-text-primary mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-text-secondary leading-[1.65] mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-text-secondary">
              {p.tech.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < p.tech.length - 1 && <span className="ml-3 text-border">·</span>}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
