import SectionHeading from "./sectionHeading";

export default function Experience() {
  const experiences = [
    {
      title: "Project Management Intern",
      company: "Frauscher Sensor Technology",
      tagColor: "bg-green-200",
      date: "May 2026 - Present",
      location: "Mumbai, India",
      points: [
        "Built a Windows background service (Node.js, TypeScript) using chokidar to detect stable file writes and upload tender documents to Amazon S3 via resumable multipart uploads.",
        "Designed an interfacing demo of reset relays for the axle counter system for the design and hardware teams."
      ]
    },
    {
      title: "Full Stack Production Engineer (Freelance)",
      company: "Hibiscus Tech",
      tagColor: "bg-green-200",
      date: "Feb 2026 - Present",
      location: "Remote",
      points: [
        "Built the real-time leaderboard system using Redis Sorted Sets, with monthly archival snapshots into PostgreSQL.",
        "Built the platform's analysis section end-to-end, from design to production, with data visualization and player metrics.",
        "Engineered heuristic-based chess puzzle generation matched to player skill level."
      ]
    },
    {
      title: "Data Science & Machine Learning Intern",
      company: "MMRDA - DB RAIL",
      tagColor: "bg-green-200",
      date: "May 2025 - Jun 2025",
      location: "Mumbai, India",
      points: [
        "Engineered ML-based solutions to optimize rolling stock scheduling and reduce headway latency.",
        "Contributed to headway design for Mumbai Metro Line 14 at Shreyas Cinema station, predicting dwell time and headway impact."
      ]
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">

      <SectionHeading accent="bg-green-200">EXPERIENCE</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_black] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
              index === 0 ? "md:col-span-2" : ""
            } ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
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
                    className={`inline-block mt-2 px-3 py-1 text-sm border-2 border-black shadow-[3px_3px_0px_black] ${exp.tagColor} hover:bg-green-300 transition`}
                  >
                    {exp.company}
                  </a>
                ) : (
                  <span
                    className={`inline-block mt-2 px-3 py-1 text-sm border-2 border-black shadow-[3px_3px_0px_black] ${exp.tagColor}`}
                  >
                    {exp.company}
                  </span>
                )}
              </div>

              {/* Right section */}
              <div className="text-right">
                <div className="bg-purple-300 border-2 border-black px-3 py-1 text-sm font-mono shadow-[3px_3px_0px_black]">
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