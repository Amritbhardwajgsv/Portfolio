import React from "react";
import { SOCIAL_DATA } from "../utils/socials";

const imageURL = new URL('../utils/image.png', import.meta.url);

export default function Header() {
  return (
    <header className="bg-amber-50">
      <div className="flex flex-col items-center justify-center container mx-auto py-6 px-4 sm:px-8">

          <img 
            src={imageURL.href} 
            alt="Profile" 
            className="w-20 h-20 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-black mt-4" 
          />
          <h1 className="mt-4 font-bold pb-2 font-mono text-3xl sm:text-5xl text-center">AMRIT BHARDWAJ</h1>
          <div className="border-2 mt-2.5 bg-[#ffb3ba] ">
            <h2 className="p-3 font-black bold font-mono  text-2xl "> MERN | MACHINE LEARNING | DSA | GENAI </h2>
          </div>
          <div className="flex gap-8 mt-4 ">
         {SOCIAL_DATA.map((social)=>{
          const Icon=social.icon;
          const isResume = social.name.toLowerCase() === 'resume';
          const linkProps = isResume
            ? { download: 'resume.pdf', target: '_self', rel: undefined }
            : { target: social.isEmail ? '_self' : '_blank', rel: 'noopener noreferrer' };

          return(
      <a
  key={social.name}
  href={social.href}
  download={social.name === "Resume" ? "resume.pdf" : undefined}
  target={social.name === "Resume" || social.isEmail ? "_self" : "_blank"}
  rel={social.name === "Resume" || social.isEmail ? undefined : "noopener noreferrer"}
  className="inline-flex items-center justify-center w-14 h-14 border-2 border-gray-400 rounded-xl transition-all duration-300
  hover:shadow-lg hover:shadow-violet-400/60 hover:-translate-x-1 hover:-translate-y-1"
>
  <Icon size={32} strokeWidth={2.5} />
</a>
          );        
         })}
        </div>
        <div className="h-1 w-full bg-black my-4"></div>
      </div>
    </header>
  );
}