import MyActivity from "../utils/activity";

export default function About() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col items-center justify-center px-4 sm:px-8 py-8">
      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-10 text-center shadow-[8px_8px_0px_0px_black]">
        
        <h1 className="text-3xl font-mono font-bold mb-6">
          Hi, I&apos;m Amrit.
        </h1>
        <p className="text-lg mb-6">
          I am a 3rd-year Electronics and Communication Engineering student with a strong focus on 
          <span className="font-semibold"> C++, frontend development, backend development, and Generative AI</span>.
        </p>

        <p className="text-lg mb-6">
          I am an active competitive programmer with profiles on 
          <span className="font-semibold"> LeetCode, Codeforces, and CodeChef</span>, with a maximum rating of 
          <span className="font-semibold"> 1700+ on LeetCode, 1100+ on Codeforces, and 1300+ on CodeChef</span>. 
          As an active learner, I am also building my fundamentals in machine learning and exploring real-world use cases.
        </p>
      </div>
      <div className="bg-white border-4 border-black max-w-4xl w-full p-6 sm:p-10 text-center shadow-[8px_8px_0px_0px_black] mt-3.5">
        
        <MyActivity></MyActivity>
        
  </div>
    </div>
  );
}
