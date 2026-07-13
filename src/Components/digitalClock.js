import {useEffect,useState} from "react";

const formatTime=date=>new Intl.DateTimeFormat(undefined,{
  hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"
}).format(date);

const formatDate=date=>new Intl.DateTimeFormat(undefined,{
  weekday:"short",day:"2-digit",month:"short"
}).format(date);

export default function DigitalClock(){
  const [now,setNow]=useState(()=>new Date());
  useEffect(()=>{const id=setInterval(()=>setNow(new Date()),1000);return()=>clearInterval(id)},[]);
  return <div className="digital-clock" aria-label={"Local time "+formatTime(now)}>
    <span className="clock-live"><i/> Local time</span>
    <strong>{formatTime(now)}</strong>
    <small>{formatDate(now)}</small>
  </div>;
}
