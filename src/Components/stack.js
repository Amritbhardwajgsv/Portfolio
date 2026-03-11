export default function Stack() {

  const stack = [
    {
      title: "Languages",
      icon: "</>",
      color: "bg-blue-200",
      items: ["C++", "C", "Python", "JavaScript", "TypeScript", "SQL", "MATLAB"]
    },
    {
      title: "Libraries & Frameworks",
      icon: "📦",
      color: "bg-purple-300",
      items: [
        "React",
        "Node.js",
        "Express",
        "Redux",
        "Next.js",
        "Scikit-learn",
        "NumPy",
        "Pandas"
      ]
    },
    {
      title: "Developer Tools",
      icon: "🔧",
      color: "bg-red-300",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "MongoDB",
        "Postman",
        "Jupyter",
        "Tailwind",
        "Docker"
      ]
    }
  ];

  return (
    <section className="w-full flex flex-col items-center py-10 sm:py-14 bg-amber-50 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold mb-8 border-b-4 border-green-400 text-center w-full max-w-4xl">
        TECH STACK
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-4xl">

        {stack.map((category, index) => (
          <div
            key={index}
            className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_black]"
          >

            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono">{category.icon}</span>

              <h3 className="text-lg font-semibold">
                {category.title}
              </h3>
            </div>

            <div className="h-[1px] bg-gray-300 mb-6"></div>

            <div className="flex flex-wrap gap-4">

              {category.items.map((item, i) => (
                <span
                  key={i}
                  className={`${category.color} border-2 border-black px-4 py-2 font-mono text-sm shadow-[4px_4px_0px_black]`}
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