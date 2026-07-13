import Section from "./section";

export default function About() {
  return (
    <Section id="about" eyebrow="// about">
      <p className="text-base leading-[1.65] text-text-primary max-w-prose">
        I'm a final-year Electronics &amp; Communication Engineering student at Gati
        Shakti Vishwavidyalaya, specializing in rail engineering with a focus on
        backend systems and applied machine learning. I've shipped production
        backends handling real-time leaderboards, resumable S3 ingestion pipelines,
        and multilingual ML triage systems. I'm an active competitive programmer —
        1726 max rating on LeetCode (top 15%). Open to internship and freelance
        collaboration opportunities.
      </p>
    </Section>
  );
}
