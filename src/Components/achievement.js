import SectionHeading from "./sectionHeading";

export default function Achievements() {

const achievements = [
{
title: "TCS iON NQT – IT Certification",
tech: ["Programming", "C++"],
points: [
"Scored 89% in Programming (C++).",
"Ranked in the top percentile in the Cognitive Ability assessment."
]
},
{
title: "Competitive Programming",
tech: ["DSA", "Algorithms"],
points: [
"LeetCode maximum rating: 1726 (Top 15%).",
"CodeChef rating: 1300+.",
"Codeforces rating: 1100+."
]
},
{
title: "Flipkart Gridathon",
tech: ["Hackathon"],
points: ["Selected for Round 2 among the top 1.6k teams."]
},
{
title: "Wabtec Exceed 3.0",
tech: ["Hackathon"],
points: ["Among the top 25 teams to qualify for the Wabtec Exceed Hackathon 3.0."]
},
{
title: "DBMS (NPTEL)",
tech: ["Certification"],
points: ["Completed under Prof. Partha Pratim Das & Prof. Samiran Chattopadhyay, IIT Kharagpur."]
},
{
title: "Intro to Machine Learning (NPTEL)",
tech: ["Certification"],
points: ["Completed under Prof. Balaram Subramanian, IIT Madras."]
},
{
title: "Junior Scientist Award",
tech: ["Research", "Science Congress"],
points: [
"Awarded Junior Scientist recognition by the National Children's Science Congress, Dept. of Science and Technology.",
"Part of the KVS National team for the JNMSEE Exhibition."
]
}
];

return (
  <section className="w-full flex flex-col items-center py-12 sm:py-16 bg-amber-50 px-4 sm:px-8">
    <SectionHeading accent="bg-yellow-300">ACHIEVEMENTS</SectionHeading>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">

      {achievements.map((ach, index) => (
        <div
          key={index}
          className={`bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_black] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
            index % 2 === 0 ? "rotate-1" : "-rotate-1"
          }`}
        >

          <div className="flex justify-between items-start">

            <div>
              <h3 className="text-xl font-semibold">{ach.title}</h3>

              <div className="flex gap-2 mt-2 flex-wrap">
                {ach.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-yellow-200 border-2 border-black px-2 py-1 text-xs font-mono shadow-[3px_3px_0px_black]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {ach.year && (
              <span className="bg-purple-300 border-2 border-black px-2 py-1 text-sm font-mono shadow-[3px_3px_0px_black]">
                {ach.year}
              </span>
            )}

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
