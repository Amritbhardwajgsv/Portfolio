import {useRef,useState} from "react";

export default function EntryIntro(){
  const [exiting,setExiting]=useState(false);
  const [visible,setVisible]=useState(true);
  const timer=useRef(null);

  const enter=()=>{
    if(exiting)return;
    sessionStorage.setItem("portfolio:entered","true");
    window.dispatchEvent(new CustomEvent("portfolio:enter",{detail:{source:"entry-screen"}}));
    setExiting(true);
    timer.current=setTimeout(()=>setVisible(false),760);
  };

  if(!visible)return null;
  return <div className={"entry-intro "+(exiting?"is-exiting":"")}>
    <div className="entry-top"><span>AMRIT BHARDWAJ / PORTFOLIO</span><span>2026</span></div>
    <div className="entry-shapes" aria-hidden="true"><i/><i/><i/></div>
    <button className="entry-core" onClick={enter} aria-label="Enter Amrit Bhardwaj portfolio and start music">
      <span>AB</span><small>{exiting?"OPENING...":"ENTER PORTFOLIO"}</small>
    </button>
    <div className="entry-bottom"><span>FULL-STACK / APPLIED AI / SYSTEMS</span><button onClick={enter}>Skip intro</button></div>
  </div>;
}
