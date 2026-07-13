import MyActivity from "../utils/activity";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center px-4 sm:px-8 py-10 sm:py-14">

      <h1 className="font-mono font-black tracking-tighter text-4xl sm:text-6xl mb-8 max-w-4xl w-full text-center leading-tight">
        Hi, I&apos;m{" "}
        <span className="inline-block bg-blue-200 border-4 border-black px-3 py-0.5 rotate-1 shadow-[6px_6px_0px_0px_black]">
          Amrit.
        </span>
      </h1>

      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-10 text-center shadow-[8px_8px_0px_0px_black] -rotate-1 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">
        <p className="text-lg mb-6">
          I am a final-year Electronics and Communication Engineering student with a strong focus on
          <span className="font-semibold"> C++, frontend development, backend development, and Generative AI</span>.
        </p>

        <p className="text-lg">
          I am an active competitive programmer with profiles on
          <span className="font-semibold"> LeetCode, Codeforces, and CodeChef</span>, with a maximum rating of
          <span className="font-semibold"> 1726 on LeetCode (Top 15%), 1100+ on Codeforces, and 1300+ on CodeChef</span>.
          As an active learner, I am also building my fundamentals in machine learning and exploring real-world use cases.
        </p>
      </div>

      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-10 shadow-[8px_8px_0px_0px_black] mt-6 rotate-1 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">
        <h2 className="text-xl font-mono font-bold mb-4 text-center">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
          <div>
            <h3 className="text-lg font-semibold">Gati Shakti Vishwavidyalaya (Central University)</h3>
            <p className="text-gray-700">B.Tech in Electronics and Communication Engineering (Specialization in Rail Engineering)</p>
            <p className="text-gray-500 text-sm mt-1">Vadodara, India</p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <div className="bg-purple-300 border-2 border-black px-3 py-1 text-sm font-mono shadow-[3px_3px_0px_black] inline-block">
              CGPA: 8.53
            </div>
            <p className="text-gray-500 text-sm mt-1">Expected July 2027</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap justify-center sm:justify-start">
          {["DSA", "OOP", "Machine Learning", "DBMS", "Computer Networks", "Computer Architecture"].map((course) => (
            <span
              key={course}
              className="bg-blue-200 border-2 border-black px-2 py-1 text-xs font-mono shadow-[3px_3px_0px_black]"
            >
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-10 text-center shadow-[8px_8px_0px_0px_black] mt-6 -rotate-1 transition-transform duration-200 hover:rotate-0 hover:-translate-y-1">

        <MyActivity></MyActivity>

  </div>
    </div>
  );
}
