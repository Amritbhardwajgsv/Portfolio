export default function Section({id,eyebrow,title,lede,prelude,children}){
  return <section id={id} className="section-wrap">
    {prelude&&<div className="section-prelude">{prelude}</div>}
    <div className="section-rule"><span>{eyebrow}</span><span>{"\u25C6"}</span></div>
    {(title||lede)&&<div className="section-heading">{title&&<h2>{title}</h2>}{lede&&<p>{lede}</p>}</div>}
    {children}
  </section>;
}
