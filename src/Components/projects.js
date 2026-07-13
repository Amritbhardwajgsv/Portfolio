import {ArrowUpRight,BrainCircuit,CloudCog,Route} from "lucide-react";
import Section from "./section";

const transitImage=new URL("../../public/transitops-home.png",import.meta.url);
const drishtiImage=new URL("../../public/drishti.png",import.meta.url);

const featured=[
  {
    number:"01",title:"DRISHTI",eyebrow:"Traffic intelligence platform",date:"2026",
    image:drishtiImage.href,href:"https://drishti-ex4s.onrender.com/",icon:BrainCircuit,
    stack:["FastAPI","Next.js","XGBoost"],
    summary:"An AI-assisted incident triage platform for Bengaluru Traffic Police, turning historical incident patterns into faster, more consistent response decisions.",
    details:["XGBoost models trained on 2,718 traffic incidents","Predicts incident priority, expected clearance time, and deployment requirements","Plans response needs across nine operational resource types","Presents model outputs through a production-ready decision dashboard"],
    metrics:[["2,718","incidents"],["9","resource types"],["AI","triage"]]
  },
  {
    number:"02",title:"TransitOps",eyebrow:"Role-based transport operations",date:"Jul 2026",
    image:transitImage.href,href:"https://oddohack.site/",icon:Route,
    stack:["React","Express.js","AWS EC2"],
    summary:"A unified fleet operations platform for fleet managers, drivers, safety officers, and financial analysts—covering the full vehicle, driver, and trip lifecycle.",
    details:["Database-driven depot dispatch with haversine distance matching","Automated license-expiry alerts and role onboarding with Nodemailer + node-cron","Document workflows with encoded file storage and role-based access","GitHub Actions deployment pipeline to AWS EC2"],
    metrics:[["4","user roles"],["1","live ops system"],["CI/CD","to EC2"]]
  }
];

const secondary={
  title:"Tender Agent",label:"Resilient ingestion",
  text:"SQLite-backed queues and resumable multipart S3 uploads with automatic failure recovery.",
  tech:["TypeScript","AWS S3","SQLite"]
};

export default function Projects(){
  return <Section id="projects" eyebrow="Selected work" title="Built for the messy, real world." lede="Detailed case studies where software meets transport, public safety, and production reliability.">
    <div className="featured-projects">
      {featured.map(({icon:Icon,...p})=><article className="case-study" key={p.title}>
        <a className="case-image" href={p.href} target="_blank" rel="noopener noreferrer">
          <img src={p.image} alt={p.title+" live application screenshot"}/><span>View live <ArrowUpRight size={18}/></span>
        </a>
        <div className="case-body">
          <div className="case-kicker"><span>{p.number} / {p.eyebrow}</span><span>{p.date}</span></div>
          <div className="case-title"><Icon size={30}/><h3>{p.title}</h3></div>
          <p className="case-summary">{p.summary}</p>
          <ul>{p.details.map(x=><li key={x}>{x}</li>)}</ul>
          <div className="case-metrics">{p.metrics.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
          <div className="case-footer"><div>{p.stack.map(x=><span key={x}>{x}</span>)}</div><a href={p.href} target="_blank" rel="noopener noreferrer">Open project <ArrowUpRight size={16}/></a></div>
        </div>
      </article>)}
    </div>
    <div className="secondary-projects">
      <article><div><CloudCog size={24}/><span>{secondary.label}</span></div><h3>{secondary.title}</h3><p>{secondary.text}</p><footer>{secondary.tech.map(x=><span key={x}>{x}</span>)}</footer></article>
    </div>
  </Section>
}
