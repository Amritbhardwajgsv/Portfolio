import SectionHeading from "./sectionHeading";

export default function Stack() {

  const stack = [
    {
      title: "Languages",
      icon: "</>",
      color: "bg-blue-200",
      items: ["C++", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Frontend",
      icon: "🎨",
      color: "bg-purple-300",
      items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI"]
    },
    {
      title: "Backend & Databases",
      icon: "🗄️",
      color: "bg-red-300",
      items: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "WebSockets",
        "WebRTC",
        "JWT Auth",
        "Mongoose",
        "Prisma",
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Redis"
      ]
    },
    {
      title: "AI / ML & LLM Tooling",
      icon: "🧠",
      color: "bg-green-200",
      items: [
        "Scikit-learn",
        "XGBoost",
        "CatBoost",
        "Pandas",
        "NumPy",
        "SpaCy",
        "LangChain",
        "LangGraph",
        "RAG",
        "Vector Embeddings",
        "Gemini API"
      ]
    },
    {
      title: "System Design & Tools",
      icon: "🛠️",
      color: "bg-yellow-200",
      items: [
        "Event-Driven Architecture",
        "Producer-Consumer",
        "Pub/Sub Messaging",
        "Git/GitHub",
        "Docker",
        "Postman",
        "Jupyter",
        "VS Code",
        "AWS S3",
        "EC2"
      ]
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">
      <SectionHeading accent="bg-blue-200">TECH STACK</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl">

        {stack.map((category, index) => (
          <div
            key={index}
            className={`bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_black] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${
              category.items.length > 8 ? "md:col-span-2" : ""
            } ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
          >

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xl">{category.icon}</span>

              <h3 className="text-lg font-semibold">
                {category.title}
              </h3>
            </div>

            <div className="h-[3px] bg-black mb-6"></div>

            <div className="flex flex-wrap gap-3">

              {category.items.map((item, i) => (
                <span
                  key={i}
                  className={`${category.color} border-2 border-black px-3 py-1.5 font-mono text-sm shadow-[3px_3px_0px_black] transition-transform hover:-translate-y-0.5`}
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}