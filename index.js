import React from "react";
import ReactDOM from "react-dom/client";
import EntryIntro from "./src/Components/entryIntro";
import Hero from "./src/Components/hero";
import About from "./src/Components/about";
import Projects from "./src/Components/projects";
import Skills from "./src/Components/skills";
import Music from "./src/Components/music";
import Activity from "./src/Components/activity";
import Experience from "./src/Components/experience";
import Contact from "./src/Components/contact";

const personSchema={
  "@context":"https://schema.org",
  "@type":"Person",
  name:"Amrit Bhardwaj",
  jobTitle:"Full-Stack & Applied AI Engineer",
  email:"mailto:amritbharadwaj4@gmail.com",
  url:"https://www.printamrit.online/",
  sameAs:[
    "https://github.com/Amritbhardwajgsv",
    "https://www.linkedin.com/in/amrit-bhardwaj-50836528a/",
    "https://x.com/print_amrit"
  ],
  knowsAbout:["Full-stack developer","Applied AI","Machine learning","Real-time systems","Backend engineering","Gsv","Gati Shakti Vishwavidyalaya"]
};

function StructuredData(){
  React.useEffect(()=>{
    const script=document.createElement("script");
    script.id="person-json-ld";
    script.type="application/ld+json";
    script.text=JSON.stringify(personSchema);
    document.head.appendChild(script);
    return()=>script.remove();
  },[]);
  return null;
}

function App(){
  return <div className="site-shell">
    <StructuredData/>
    <EntryIntro/><Hero/>
    <main><About/><Projects/><Skills/><Music/><Activity/><Experience/><Contact/></main>
  </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
