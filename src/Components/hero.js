import { ArrowDownRight, Circle, Download } from "lucide-react";
import { SOCIAL_DATA } from "../utils/socials";
const imageURL = new URL("../utils/image.png", import.meta.url);
const resumeURL = new URL("../../public/resume.pdf", import.meta.url);
const nav = [["Work","#projects"],["Stack","#skills"],["Sound","#soundtrack"],["Journey","#experience"],["Contact","#contact"]];
export default function Hero(){
return <header className="hero" id="top">
  <nav className="topbar"><a className="monogram" href="#top">AB<span>.</span></a><div className="nav-links">{nav.map(([x,h])=><a key={h} href={h}>{x}</a>)}</div><a className="nav-cta" href="mailto:amritbharadwaj4@gmail.com"><Circle size={9} fill="currentColor"/> Available for work</a></nav>
  <div className="hero-grid"><div className="hero-copy"><p className="kicker"><span>01</span> Full-stack + applied AI engineer</p><h1>I build systems that <em>think</em>, scale &amp; stay useful.</h1><p className="hero-intro">I’m Amrit—a product-minded engineer turning difficult operational problems into fast, dependable software.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowDownRight size={18}/></a><a className="button ghost" href={resumeURL.href} download="Amrit_Bhardwaj_Resume.pdf">Résumé <Download size={17}/></a></div></div>
  <aside className="hero-aside"><div className="portrait-frame"><div className="portrait-label">Based in India · building worldwide</div><img src={imageURL.href} alt="Amrit Bhardwaj"/><div className="portrait-stamp">BUILD<br/>SHIP<br/>LEARN</div></div><div className="hero-meta"><div><strong>1726</strong><span>LeetCode max</span></div><div><strong>3+</strong><span>Production systems</span></div><div><strong>2026</strong><span>Graduating</span></div></div></aside></div>
  <div className="social-strip"><span>Find me online</span>{SOCIAL_DATA.map(s=>{const Icon=s.icon,isResume=s.name.toLowerCase()==="resume";return <a key={s.name} href={isResume?resumeURL.href:s.href} download={isResume?"Amrit_Bhardwaj_Resume.pdf":undefined} target={isResume||s.isEmail?"_self":"_blank"} rel={isResume||s.isEmail?undefined:"noopener noreferrer"}><Icon size={16}/>{s.name}</a>})}</div>
</header>}
