import Section from "./section";

const groups = [
  { label: "Languages", items: ["C++", "JavaScript", "TypeScript", "Python"] },
  { label: "Frontend", items: ["React.js", "Next.js", "Redux", "Tailwind CSS", "ShadCN UI"] },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "WebRTC", "JWT Auth", "Mongoose", "Prisma", "PostgreSQL", "MongoDB", "SQLite", "Redis"]
  },
  {
    label: "AI / ML",
    items: ["Scikit-learn", "XGBoost", "CatBoost", "Pandas", "NumPy", "SpaCy", "LangChain", "LangGraph", "RAG", "Vector Embeddings", "Gemini API"]
  },
  { label: "Infra", items: ["Git/GitHub", "Docker", "Postman", "AWS S3", "EC2", "Jupyter", "VS Code"] }
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="// skills">
      <div className="flex flex-col gap-4">
        {groups.map((g) => (
          <div key={g.label} className="flex flex-col sm:flex-row sm:gap-6">
            <span className="font-mono text-xs text-text-secondary uppercase tracking-wide sm:w-24 shrink-0 mb-1 sm:mb-0 sm:pt-0.5">
              {g.label}
            </span>
            <span className="font-mono text-sm text-text-primary leading-[1.65]">
              {g.items.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
