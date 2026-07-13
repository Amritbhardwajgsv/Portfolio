import Section from "./section";

const experience = [
  {
    role: "Project Management Intern",
    org: "Frauscher Sensor Technology",
    date: "May 2026 – Present"
  },
  {
    role: "Full Stack Production Engineer (Freelance)",
    org: "Hibiscus Tech",
    date: "Feb 2026 – Present"
  },
  {
    role: "Data Science & ML Intern",
    org: "MMRDA – DB RAIL",
    date: "May 2025 – Jun 2025"
  }
];

const achievements = [
  "LeetCode 1726 max rating (top 15%), CodeChef 1300+, Codeforces 1100+",
  "Flipkart Gridathon — top 1.6k teams, selected for Round 2",
  "Wabtec Exceed 3.0 — top 25 teams",
  "TCS iON NQT — 89% in Programming (C++)",
  "DBMS & Intro to Machine Learning certifications (NPTEL)",
  "Junior Scientist Award, National Children's Science Congress"
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="// experience">
      <ul className="flex flex-col gap-4 mb-8">
        {experience.map((e) => (
          <li key={e.role} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
            <span className="text-sm text-text-primary">
              <span className="font-semibold">{e.role}</span>
              <span className="text-text-secondary"> · {e.org}</span>
            </span>
            <span className="font-mono text-xs text-text-secondary shrink-0">{e.date}</span>
          </li>
        ))}
      </ul>

      <p className="font-mono text-xs text-text-secondary uppercase tracking-wide mb-3">
        Achievements
      </p>
      <ul className="flex flex-col gap-2">
        {achievements.map((a) => (
          <li key={a} className="text-sm text-text-secondary leading-[1.65] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-border">
            {a}
          </li>
        ))}
      </ul>
    </Section>
  );
}
