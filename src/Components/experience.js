export default function Experience() {
  const experiences = [
    {
      title: "Full Stack Product Intern",
      company: "Hibiscus Tech",
      link: "https://www.psyplay.io",
      tagColor: "bg-green-200",
      date: "Feb 2026 - Present",
      location: "Remote ",
      points: [
        "Building the first AI-powered gaming analysis interface for Psyplay.",
        "Developing responsive frontend components and integrating backend APIs for gameplay data processing.",
        "Implementing interactive UI features for analyzing gameplay and AI-driven insights."
      ]
    },
    {
      title: "Data Science & ML Intern",
      company: "MMRDA",
      tagColor: "bg-green-200",
      date: "May 2025 - Jun 2025",
      location: "Mumbai",
      points: [
        "Developed ML solutions for metro rolling stock scheduling.",
        "Analyzed metro operational datasets to tune speed parameters.",
        "Reduced headway latency and improved operational efficiency."
      ]
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 border-b-4 border-green-400 text-center w-full max-w-4xl">
        EXPERIENCE
      </h2>

      <div className="flex flex-col gap-8 w-full max-w-4xl">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_black]"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

              {/* Left section */}
              <div className="sm:max-w-[65%]">
                <h3 className="text-xl font-semibold">
                  {exp.title}
                </h3>

                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block mt-2 px-3 py-1 text-sm border border-black ${exp.tagColor} hover:bg-green-300 transition`}
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-sm border border-black ${exp.tagColor}`}
                  >
                    {exp.company}
                  </span>
                )}
              </div>

              {/* Right section */}
              <div className="text-right">
                <div className="bg-purple-300 border border-black px-3 py-1 text-sm font-mono">
                  {exp.date}
                </div>

                <p className="text-gray-500 text-sm mt-1">
                  {exp.location}
                </p>
              </div>

            </div>

            {/* Bullet points */}
            <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-800">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>
    </section>
  );
}