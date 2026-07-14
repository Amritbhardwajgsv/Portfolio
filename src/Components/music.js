import {useEffect,useRef,useState} from "react";
import {Disc3,Headphones,Music2} from "lucide-react";
import Section from "./section";

const tracks=[
  {title:"Blinding Lights",artist:"The Weeknd",id:"4NRXx6U8ABQ",color:"#d7ff4f"},
  {title:"Gangnam Style",artist:"PSY",id:"9bZkp7q19f0",color:"#ff8c78"},
  {title:"Happy Nation",artist:"Ace of Base",id:"HWjCStB6k4o",color:"#b8a7ff"}
];

export default function Music(){
  const [active,setActive]=useState(0);
  const [started,setStarted]=useState(false);
  const playerRef=useRef(null);
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
  };

  return <Section id="soundtrack" eyebrow="Studio soundtrack" title="Code has a rhythm.">
    <div className="music-player" style={{"--record-accent":track.color}}>
      <div className="turntable">
        <div className={"vinyl "+(started?"spinning":"")}><div className="vinyl-rings"/><div className="vinyl-label"><Disc3 size={32}/><span>AB</span></div></div>
        <div key={track.id} className={"tonearm "+(started?"engaged":"")}><i/></div>
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
