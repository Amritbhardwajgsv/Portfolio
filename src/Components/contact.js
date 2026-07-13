import Section from "./section";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="// contact">
      <p className="text-base text-text-primary mb-2">
        <a
          href="mailto:amritbharadwaj4@gmail.com"
          className="text-accent hover:underline underline-offset-4 decoration-1 transition-[text-decoration] duration-[120ms]"
        >
          amritbharadwaj4@gmail.com
        </a>
      </p>
      <p className="text-sm text-text-secondary mb-10">
        Open to internships and collaborations.
      </p>
      <p className="font-mono text-xs text-text-secondary">
        © 2026 Amrit Bhardwaj
      </p>
    </Section>
  );
}
