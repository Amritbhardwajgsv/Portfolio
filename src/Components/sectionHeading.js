export default function SectionHeading({ children, accent = "bg-yellow-300" }) {
  return (
    <h2 className="w-full max-w-5xl mb-10 sm:mb-14 font-mono font-black tracking-tighter text-4xl sm:text-6xl md:text-7xl leading-none">
      <span
        className={`inline-block ${accent} border-4 border-black px-4 py-1 -rotate-1 shadow-[6px_6px_0px_0px_black]`}
      >
        {children}
      </span>
    </h2>
  );
}
