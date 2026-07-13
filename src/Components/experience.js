import {Award,BarChart3,Gamepad2,TrainFront,ArrowUpRight} from "lucide-react";
import Section from "./section";

const psyplayImage=new URL("../../public/psyplay.png",import.meta.url);

const jobs=[
  {
    date:"2026—NOW",
    role:"Project Management Intern",
    org:"Frauscher Sensor Technology",
    icon:TrainFront,
    summary:"Turning complex rail-technology delivery into coordinated, measurable execution.",
    facts:["Coordinate project information across technical and delivery stakeholders","Support structured planning, progress visibility, and execution follow-through"]
  },
  {
    date:"2026—NOW",
    role:"Full Stack Production Engineer",
    org:"Hibiscus Tech",
    icon:Gamepad2,
    summary:"Shipping customer-facing production software across backend services, real-time flows, and polished interfaces.",
    facts:[
      "Contributed full-stack production work to PsyPlay.io, an AI-assisted multiplayer gaming platform",
      "Worked across Chess, Ludo, and Connect 4 experiences, including matchmaking and play-with-friends journeys",
      "Built and refined backend data flows, interactive interfaces, and live-production behavior"
    ],
    featured:true
  },
  {
    date:"2025",
    role:"Data Science & ML Intern",
    org:"MMRDA — DB RAIL",
    icon:BarChart3,
    summary:"Applied data science and machine learning to real railway operations.",
    facts:["Prepared and analyzed operational datasets for railway use cases","Translated model findings into clear, decision-oriented outputs"]
  }
];

const wins=["LeetCode 1726 max rating · top 15%","Flipkart Gridathon · Round 2","Wabtec Exceed 3.0 · top 25 teams","TCS iON NQT · 89% Programming","NPTEL · DBMS + Machine Learning","Junior Scientist Award · NCSC"];

export default function Experience(){
  return <Section id="experience" eyebrow="Journey" title="Learning in public. Delivering in production.">
    <div className="journey-layout">
      <div className="timeline">
        {jobs.map(({icon:Icon,...job})=><article className={job.featured?"experience-entry featured":"experience-entry"} key={job.role}>
          <div className="timeline-marker"><Icon size={18}/></div>
          <div className="timeline-content">
            <span>{job.date}</span>
            <h3>{job.role}</h3>
            <h4>{job.org}</h4>
            <p>{job.summary}</p>
            <ul className="experience-facts">{job.facts.map(fact=><li key={fact}>{fact}</li>)}</ul>
            {job.featured&&<a className="product-preview" href="https://www.psyplay.io/" target="_blank" rel="noopener noreferrer">
              <img src={psyplayImage.href} alt="PsyPlay.io multiplayer games homepage preview"/>
              <span><i><Gamepad2 size={18}/> Live product</i><strong>Explore PsyPlay.io <ArrowUpRight size={18}/></strong></span>
            </a>}
          </div>
        </article>)}
      </div>
      <aside className="wins">
        <div className="wins-title"><Award size={22}/><h3>Signal, not noise</h3></div>
        {wins.map(x=><p key={x}>{x}</p>)}
      </aside>
    </div>
  </Section>
}
