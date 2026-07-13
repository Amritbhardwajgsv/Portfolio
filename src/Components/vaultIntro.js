import {useEffect,useRef,useState} from "react";
import * as THREE from "../vendor/three.module.min.js";

export default function VaultIntro(){
  const mountRef=useRef(null);
  const [unlocking,setUnlocking]=useState(false);
  const [visible,setVisible]=useState(true);

  useEffect(()=>{
    if(!visible||!mountRef.current)return;
    const host=mountRef.current;
    const scene=new THREE.Scene();
    scene.fog=new THREE.FogExp2(0x080907,0.075);
    const camera=new THREE.PerspectiveCamera(42,innerWidth/innerHeight,.1,100);
    camera.position.z=innerWidth<600?14:9;

    const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
    renderer.setSize(innerWidth,innerHeight);
    renderer.outputColorSpace=THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const vault=new THREE.Group();
    scene.add(vault);
    const metal=new THREE.MeshStandardMaterial({color:0x34372f,metalness:.95,roughness:.23});
    const dark=new THREE.MeshStandardMaterial({color:0x11120f,metalness:.8,roughness:.3});
    const acid=new THREE.MeshStandardMaterial({color:0xd7ff4f,emissive:0x6f8b10,emissiveIntensity:1.5,metalness:.35,roughness:.22});

    const rings=[];
    [1.55,2.05,2.58,3.12].forEach((radius,i)=>{
      const ring=new THREE.Mesh(new THREE.TorusGeometry(radius,i===3?.095:.055,16,110),i===1?acid:metal);
      ring.rotation.x=i%2?.16:-.12;
      ring.rotation.y=i%2?.24:-.2;
      ring.userData.speed=(i%2?1:-1)*(.22+i*.09);
      vault.add(ring);rings.push(ring);
    });

    const plate=new THREE.Mesh(new THREE.CylinderGeometry(1.32,1.32,.28,64),dark);
    plate.rotation.x=Math.PI/2;
    vault.add(plate);
    const plateRing=new THREE.Mesh(new THREE.TorusGeometry(1.15,.055,14,80),acid);
    vault.add(plateRing);

    const teeth=new THREE.Group();
    const toothGeo=new THREE.BoxGeometry(.12,.34,.12);
    for(let i=0;i<36;i++){
      const tooth=new THREE.Mesh(toothGeo,i%6===0?acid:metal);
      const a=i/36*Math.PI*2;
      tooth.position.set(Math.cos(a)*3.13,Math.sin(a)*3.13,0);
      tooth.rotation.z=a;
      teeth.add(tooth);
    }
    vault.add(teeth);

    const particlesGeo=new THREE.BufferGeometry();
    const positions=new Float32Array(180*3);
    for(let i=0;i<180;i++){
      const r=4+Math.random()*5,a=Math.random()*Math.PI*2;
      positions[i*3]=Math.cos(a)*r;positions[i*3+1]=Math.sin(a)*r;positions[i*3+2]=(Math.random()-.5)*5;
    }
    particlesGeo.setAttribute("position",new THREE.BufferAttribute(positions,3));
    const particles=new THREE.Points(particlesGeo,new THREE.PointsMaterial({color:0xd7ff4f,size:.025,transparent:true,opacity:.55}));
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0x879070,1.1));
    const key=new THREE.PointLight(0xd7ff4f,45,20);key.position.set(2.5,3,5);scene.add(key);
    const rim=new THREE.PointLight(0x7b5cff,32,18);rim.position.set(-4,-2,4);scene.add(rim);

    const pointer={x:0,y:0},target={x:0,y:0};
    const onMove=e=>{target.x=(e.clientX/innerWidth-.5)*.7;target.y=(e.clientY/innerHeight-.5)*.7};
    addEventListener("pointermove",onMove);
    const onResize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight)};
    addEventListener("resize",onResize);

    const clock=new THREE.Clock();
    let frame;
    const animate=()=>{
      const t=clock.getElapsedTime();
      pointer.x+=(target.x-pointer.x)*.045;pointer.y+=(target.y-pointer.y)*.045;
      vault.rotation.y=pointer.x;vault.rotation.x=-pointer.y;
      vault.position.x=pointer.x*.35;vault.position.y=-pointer.y*.35;
      rings.forEach((ring,i)=>{ring.rotation.z=t*ring.userData.speed+(i*.55);});
      teeth.rotation.z=-t*.16;
      plateRing.rotation.z=t*.4;
      const pulse=1+Math.sin(t*3)*.012;vault.scale.setScalar(pulse);
      particles.rotation.z=t*.025;
      renderer.render(scene,camera);
      frame=requestAnimationFrame(animate);
    };
    animate();

    const unlockTimer=setTimeout(()=>setUnlocking(true),2300);
    const finishTimer=setTimeout(()=>setVisible(false),3300);
    return()=>{
      clearTimeout(unlockTimer);clearTimeout(finishTimer);cancelAnimationFrame(frame);
      removeEventListener("pointermove",onMove);removeEventListener("resize",onResize);
      renderer.dispose();rings.forEach(r=>r.geometry.dispose());plate.geometry.dispose();plateRing.geometry.dispose();toothGeo.dispose();particlesGeo.dispose();
      metal.dispose();dark.dispose();acid.dispose();
      if(renderer.domElement.parentNode)renderer.domElement.parentNode.removeChild(renderer.domElement);
    };
  },[visible]);

  if(!visible)return null;
  return <div className={"vault-intro "+(unlocking?"unlocking":"")} aria-label="Opening Amrit Bhardwaj portfolio">
    <div className="vault-canvas" ref={mountRef}/>
    <div className="vault-noise"/>
    <div className="vault-brand"><span>MAGNETIC ACCESS VAULT</span><strong>AB</strong><small>{unlocking?"ACCESS GRANTED":"ALIGNING FIELDS"}</small></div>
    <div className="vault-progress"><i/><span>PORTFOLIO / 2026</span></div>
    <button onClick={()=>setVisible(false)}>Skip intro ↗</button>
  </div>;
}
