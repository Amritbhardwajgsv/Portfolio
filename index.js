import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./src/Components/hero";
import About from "./src/Components/about";
import Projects from "./src/Components/projects";
import Skills from "./src/Components/skills";
import Activity from "./src/Components/activity";
import Experience from "./src/Components/experience";
import Contact from "./src/Components/contact";

function App() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Activity />
        <Experience />
        <Contact />
      </main>
      <div className="max-w-[720px] mx-auto px-5 h-16" aria-hidden="true" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
