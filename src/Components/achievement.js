export default function Achievements() {

const achievements = [
{
title: "TCS iON NQT – IT Certification",
year: "2026",
tech: ["Programming", "C++"],
points: [
"Scored 89% in Programming (C++).",
"Ranked in the top percentile in Cognitive Ability assessment.",
"Demonstrated strong problem-solving and programming fundamentals."
]
},
{
title: "Competitive Programming",
year: "Current",
tech: ["DSA", "Algorithms"],
points: [
"LeetCode maximum rating: 1726 (Top 15%).",
"CodeChef rating: 1300.",
"Codeforces rating: 1100."
]
},
{
title: "RoomGi Hackathon",
year: "2025",
tech: ["Hackathon", "Team Project"],
points: [
"Selected among the Top 25 teams in the RoomGi Hackathon.",
"Developed innovative solutions during the competition.",
"Collaborated in a fast-paced development environment."
]
},
{
title: "DST Junior Scientist Award",
year: "2019",
tech: ["Research", "Science Congress"],
points: [
"Awarded Junior Scientist recognition by DST.",
"Finalist at the National Children Science Congress.",
"Presented research work focused on societal scientific problems."
]
}
];

return (
  <section className="w-full flex flex-col items-center py-12 sm:py-16 bg-amber-50 px-4 sm:px-8">
    <h2 className="text-3xl sm:text-4xl font-mono font-bold mb-10 border-b-4 border-yellow-400">
      ACHIEVEMENTS
    </h2>

    <div className="flex flex-col gap-10 w-full max-w-4xl">

      {achievements.map((ach, index) => (
        <div
          key={index}
          className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_black]"
        >

          <div className="flex justify-between items-start">

            <div>
              <h3 className="text-xl font-semibold">{ach.title}</h3>

              <div className="flex gap-2 mt-2 flex-wrap">
                {ach.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-yellow-200 border border-black px-2 py-1 text-xs font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <span className="bg-purple-300 border border-black px-2 py-1 text-sm font-mono">
              {ach.year}
            </span>

          </div>

          <ul className="mt-4 list-disc ml-6 space-y-2 text-gray-800">
            {ach.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>

  </section>
);

}
