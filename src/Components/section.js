export default function Section({ id, eyebrow, children }) {
  return (
    <section id={id} className="max-w-[720px] mx-auto px-5 mt-[72px] pt-[72px] border-t border-border">
      {eyebrow && (
        <p className="font-mono text-sm text-accent mb-4">{eyebrow}</p>
      )}
      {children}
    </section>
  );
}
