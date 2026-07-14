import {useState} from "react";
import {ArrowRight,ArrowUpRight,BrainCircuit,CloudCog,Github,Route} from "lucide-react";
import Section from "./section";

const transitImage=new URL("../../public/transitops-home.png",import.meta.url);
const drishtiImage=new URL("../../public/drishti.png",import.meta.url);

const featured=[
  {
    number:"01",title:"DRISHTI",eyebrow:"Traffic intelligence platform",date:"2026",
    image:drishtiImage.href,href:"https://drishti-ex4s.onrender.com/",icon:BrainCircuit,accent:"#d7ff4f",
    stack:["FastAPI","Next.js","XGBoost"],
    summary:"An AI-assisted incident triage platform for Bengaluru Traffic Police, turning historical incident patterns into faster, more consistent response decisions.",
    details:["XGBoost models trained on 2,718 traffic incidents","Predicts incident priority, expected clearance time, and deployment requirements","Plans response needs across nine operational resource types","Presents model outputs through a production-ready decision dashboard"],
    metrics:[["2,718","incidents"],["9","resource types"],["AI","triage"]]
  },
  {
    number:"02",title:"TransitOps",eyebrow:"Role-based transport operations",date:"Jul 2026",
    image:transitImage.href,href:"https://oddohack.site/",icon:Route,accent:"#b8a7ff",
    stack:["React","Express.js","AWS EC2"],
    summary:"A unified fleet operations platform for fleet managers, drivers, safety officers, and financial analysts - covering the full vehicle, driver, and trip lifecycle.",
    details:["Database-driven depot dispatch with haversine distance matching","Automated license-expiry alerts and role onboarding with Nodemailer + node-cron","Document workflows with encoded file storage and role-based access","GitHub Actions deployment pipeline to AWS EC2"],
    metrics:[["4","user roles"],["1","live ops system"],["CI/CD","to EC2"]]
  }
];

const secondary={
  title:"Tender Agent",
  label:"Resilient ingestion",
  text:"SQLite-backed queues and resumable multipart S3 uploads with automatic failure recovery.",
  tech:["TypeScript","AWS S3","SQLite"],
  href:"https://github.com/Amritbhardwajgsv/Tender_automation"
};

export default function Projects(){
  const [active,setActive]=useState(0);
  const project=featured[active];
  const ProjectIcon=project.icon;

  return <Section id="projects" eyebrow="Selected work" title="Built for the messy, real world." lede="Detailed case studies where software meets transport, public safety, and production reliability.">
    <div className="project-wallet">
      <aside className="wallet-shell" aria-label="Featured project wallet">
        <div className="wallet-heading"><span>Project wallet <em>Swipe</em></span><strong>{String(active+1).padStart(2,"0")} / {String(featured.length).padStart(2,"0")}</strong></div>
        <div className="wallet-slots">
          {featured.map((item,index)=><button type="button" className={"wallet-card "+(index===active?"active":"")} style={{"--wallet-accent":item.accent}} key={item.title} onClick={()=>setActive(index)} aria-pressed={index===active} aria-controls="open-project-card">
            <img src={item.image} alt=""/>
            <span>{item.number} / {item.eyebrow}</span>
            <strong>{item.title}</strong>
            <small>{index===active?"Open now":"Pull out"}<ArrowRight size={14}/></small>
          </button>)}
        </div>
        <p>Select a card to pull it out.</p>
      </aside>
      <article id="open-project-card" className="case-study wallet-open-card" key={project.title} aria-live="polite">
        <a className="case-image" href={project.href} target="_blank" rel="noopener noreferrer">
          <img src={project.image} alt={project.title+" live application screenshot"}/><span>View live <ArrowUpRight size={18}/></span>
        </a>
        <div className="case-body">
          <div className="case-kicker"><span>{project.number} / {project.eyebrow}</span><span>{project.date}</span></div>
          <div className="case-title"><ProjectIcon size={30}/><h3>{project.title}</h3></div>
          <p className="case-summary">{project.summary}</p>
          <ul>{project.details.map(x=><li key={x}>{x}</li>)}</ul>
          <div className="case-metrics">{project.metrics.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
          <div className="case-footer"><div>{project.stack.map(x=><span key={x}>{x}</span>)}</div><a href={project.href} target="_blank" rel="noopener noreferrer">Open project <ArrowUpRight size={16}/></a></div>
        </div>
      </article>
    </div>
    <div className="secondary-projects">
      <article>
        <div><CloudCog size={24}/><span>{secondary.label}</span></div>
        <h3>{secondary.title}</h3>
        <p>{secondary.text}</p>
        <footer>{secondary.tech.map(x=><span key={x}>{x}</span>)}</footer>
        <a className="secondary-link" href={secondary.href} target="_blank" rel="noopener noreferrer" aria-label="View Tender Agent source code on GitHub">
          <Github size={15}/> View source on GitHub <ArrowUpRight size={15}/>
        </a>
      </article>
    </div>
  </Section>;
}