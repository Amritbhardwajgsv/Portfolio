import SectionHeading from "./sectionHeading";

export default function Projects() {

const projects = [
{
title: "DRISHTI: Traffic Intelligence Platform",
tech: ["FastAPI", "Next.js", "XGBoost"],
points: [
"Built a full-stack AI triage system for Bengaluru Traffic Police, predicting incident priority, clearance time, and deployment needs from multilingual citizen complaints.",
"Trained an XGBoost classifier/regressor on 2,718 traffic incidents using structural features fused with multilingual sentence embeddings.",
"Built a MultiOutputRegressor predicting 9 resource targets (constables, units, barricades, etc.), wired to a weekly retraining pipeline."
]
},
{
title: "Secure Tender Document Ingestion Agent",
tech: ["TypeScript", "AWS S3", "SQLite"],
points: [
"Built a Windows service that monitors document folders, validates files, and queues uploads durably via SQLite.",
"Implemented resumable multipart S3 uploads with presigned URLs, ETag persistence, and automatic failure recovery.",
"Added per-machine API-key authentication and structured logging."
]
},
{
title: "Sosyo – Privacy-First Real-Time Social Networking Platform",
tech: ["Express.js", "PostgreSQL", "Redis"],
points: [
"Built a location-aware social platform with user discovery, mutual friendships, private messaging, and presence tracking.",
"Designed a scalable backend with Node.js, Express.js, PostgreSQL, and Redis, using JWT auth, OTP verification, and role-based access.",
"Engineered real-time messaging architecture with typing indicators, read receipts, and Redis-backed caching."
]
}
];

return (
  <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">

    <SectionHeading accent="bg-red-300">PROJECTS</SectionHeading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">
    {projects.map((proj, index) => (
      <div
        key={index}
        className={`bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_black] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
          index === 0 ? "md:col-span-2" : ""
        } ${index % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
      >

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

          <div className="sm:max-w-[65%]">
            <h3 className="text-xl font-semibold">{proj.title}</h3>

            <div className="flex gap-2 mt-2 flex-wrap">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-200 border-2 border-black px-2 py-1 text-xs font-mono shadow-[3px_3px_0px_black]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {proj.year || proj.link ? (
            <div className="flex flex-col items-end gap-2">

              {proj.year && (
                <span className="bg-purple-300 border-2 border-black px-2 py-2 text-sm font-mono shadow-[3px_3px_0px_black]">
                  {proj.year}
                </span>
              )}

              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-black p-1 rounded hover:bg-gray-100"
                >
                  ↗
                </a>
              )}

            </div>
          ) : null}

        </div>

        <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-800">
          {proj.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

      </div>
    ))}

  </div>

</section>

);
}
