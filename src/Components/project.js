export default function Projects() {

const projects = [
{
title: "Psyplay – Chess Analysis Platform",
tech: ["React", "TypeScript", "Node.js", "Chess Engine"],
year: "2026",
link: "https://github.com/Amritbhardwajgsv/psyplay",
points: [
"Developing an interactive chess analysis platform with move validation.",
"Implemented drag-and-drop chess pieces using modern frontend libraries.",
"Integrated backend engine evaluation to generate move efficiency and analysis graphs."
]
},
{
title: "Roomgi – Full Stack Web Application",
tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
year: "2026",
link: "https://github.com/Amritbhardwajgsv/roomgi",
points: [
"Built a full-stack web application with REST APIs using Express.",
"Implemented backend routing and middleware architecture.",
"Focused on scalable server-side logic and database integration."
]
},
{
title: "House Price Prediction System",
tech: ["Python", "Scikit-learn", "Machine Learning"],
year: "2025",
link: "https://github.com/Amritbhardwajgsv/housepricedetection",
points: [
"Developed a machine learning model to predict housing prices in Bangalore.",
"Performed feature engineering and preprocessing on housing datasets.",
"Implemented regression models using Python and Scikit-learn."
]
}
];

return (
  <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">

    <div className="flex flex-col gap-8 sm:gap-10 w-full max-w-4xl">
    {projects.map((proj, index) => (
      <div
        key={index}
        className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_black]"
      >

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

          <div className="sm:max-w-[65%]">
            <h3 className="text-xl font-semibold">{proj.title}</h3>

            <div className="flex gap-2 mt-2 flex-wrap">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-blue-200 border border-black px-2 py-1 text-xs font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">

            <span className="bg-purple-300 border border-black px-2 py-2 text-sm font-mono">
              {proj.year}
            </span>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black p-1 rounded hover:bg-gray-100"
            >
              ↗
            </a>

          </div>

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
