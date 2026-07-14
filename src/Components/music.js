import {useEffect,useRef,useState} from "react";
import {Disc3,Headphones,Music2} from "lucide-react";
import Section from "./section";

const tracks=[
  {title:"Blinding Lights",artist:"The Weeknd",id:"4NRXx6U8ABQ",color:"#d7ff4f"},
  {title:"Gangnam Style",artist:"PSY",id:"9bZkp7q19f0",color:"#ff8c78"},
  {title:"Happy Nation",artist:"Ace of Base",id:"HWjCStB6k4o",color:"#b8a7ff"}
];

const getTimeBasedTrack=()=>{
  const hour=new Date().getHours();
  if(hour>=5&&hour<12)return 2;
  if(hour>=12&&hour<18)return 1;
  return 0;
};

export default function Music(){
  const [active,setActive]=useState(getTimeBasedTrack);
  const [started,setStarted]=useState(false);
  const [armAngle,setArmAngle]=useState(18);
  const [draggingArm,setDraggingArm]=useState(false);
  const playerRef=useRef(null);
  const tonearmRef=useRef(null);
  const armDragRef=useRef(false);
  const retryTimers=useRef([]);
  const track=tracks[active];

  const playCurrent=()=>{
    playerRef.current?.contentWindow?.postMessage(JSON.stringify({
      event:"command",
      func:"playVideo",
      args:[]
    }),"*");
  };

  useEffect(()=>{
    const startFromEntry=()=>{
      setStarted(true);
      setArmAngle(28);
      playCurrent();
      retryTimers.current=[250,700,1300].map(delay=>setTimeout(playCurrent,delay));
    };
    window.addEventListener("portfolio:enter",startFromEntry);
    return()=>{
      window.removeEventListener("portfolio:enter",startFromEntry);
      retryTimers.current.forEach(clearTimeout);
    };
  },[]);

  const selectTrack=index=>{
    setActive(index);
    setStarted(true);
    setArmAngle(28);
  };

  const moveTonearm=event=>{
    if(!armDragRef.current||!tonearmRef.current)return;
    const rect=tonearmRef.current.getBoundingClientRect();
    const pivotX=rect.left+rect.width/2;
    const pivotY=rect.top;
    const angle=Math.atan2(pivotX-event.clientX,event.clientY-pivotY)*180/Math.PI;
    setArmAngle(Math.max(10,Math.min(42,angle)));
  };

  const startTonearmDrag=event=>{
    armDragRef.current=true;
    setDraggingArm(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    if(!started)setStarted(true);
    moveTonearm(event);
  };

  const stopTonearmDrag=event=>{
    armDragRef.current=false;
    setDraggingArm(false);
    if(event.currentTarget.hasPointerCapture(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const adjustTonearm=event=>{
    if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(event.key))return;
    event.preventDefault();
    const direction=event.key==="ArrowLeft"||event.key==="ArrowUp"?1:-1;
    setArmAngle(angle=>Math.max(10,Math.min(42,angle+direction*2)));
  };

  return <Section id="soundtrack" eyebrow="Studio soundtrack" title="Code has a rhythm.">
    <div className="music-player" style={{"--record-accent":track.color}}>
      <div className="turntable">
        <div className={"vinyl "+(started?"spinning":"")}><div className="vinyl-rings"/><div className="vinyl-label"><Disc3 size={32}/><span>AB</span></div></div>
        <div ref={tonearmRef} key={track.id} className={"tonearm "+(started?"engaged ":"")+(draggingArm?"dragging":"")} style={{"--arm-angle":armAngle+"deg"}} role="slider" tabIndex="0" aria-label="Turntable tonearm" aria-valuemin="10" aria-valuemax="42" aria-valuenow={Math.round(armAngle)} onPointerDown={startTonearmDrag} onPointerMove={moveTonearm} onPointerUp={stopTonearmDrag} onPointerCancel={stopTonearmDrag} onKeyDown={adjustTonearm}><i/></div>
        <p className={started?"is-playing":""}>
          <span className="sound-bars" aria-hidden="true"><i/><i/><i/></span>
          {started?"Now spinning":"Ready to spin"} / Side A
        </p>
      </div>
      <div className="music-console">
        <div className="music-heading"><span><Headphones size={18}/> Energy rotation</span><strong>{String(active+1).padStart(2,"0")} / {String(tracks.length).padStart(2,"0")}</strong></div>
        <div className="track-list">{tracks.map((song,i)=><button className={i===active?"active":""} key={song.id} onClick={()=>selectTrack(i)}><span>{String(i+1).padStart(2,"0")}</span><div><strong>{song.title}</strong><small>{song.artist}</small></div><Music2 size={17}/></button>)}</div>
        <iframe ref={playerRef} title={"Music player: "+track.title} src={"https://www.youtube.com/embed/"+track.id+"?enablejsapi=1&autoplay="+(started?1:0)+"&rel=0&playsinline=1"} width="100%" height="220" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media; fullscreen; picture-in-picture" loading="eager" onLoad={()=>{if(started)playCurrent()}}/>
      </div>
    </div>
  </Section>;
}
