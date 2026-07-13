export default function Section({ id, eyebrow, title, lede, children }) {
  return <section id={id} className="section-wrap">
    <div className="section-rule"><span>{eyebrow}</span><span>◆</span></div>
    {(title || lede) && <div className="section-heading">{title && <h2>{title}</h2>}{lede && <p>{lede}</p>}</div>}
    {children}
  </section>;
}
