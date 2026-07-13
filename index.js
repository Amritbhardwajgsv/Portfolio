import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./src/Components/hero";
import About from "./src/Components/about";
import Projects from "./src/Components/projects";
import Skills from "./src/Components/skills";
import Music from "./src/Components/music";
import Activity from "./src/Components/activity";
import Experience from "./src/Components/experience";
import Contact from "./src/Components/contact";
function App(){return <div className="site-shell"><Hero/><main><About/><Projects/><Skills/><Music/><Activity/><Experience/><Contact/></main></div>}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
