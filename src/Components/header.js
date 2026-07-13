import React from "react";
import { SOCIAL_DATA } from "../utils/socials";

const imageURL = new URL('../utils/image.png', import.meta.url);
const resumeURL = new URL('../../public/resume.pdf', import.meta.url);

const TICKER_ITEMS = ["MERN", "MACHINE LEARNING", "DSA", "GENAI"];

export default function Header() {
  return (
    <header className="bg-amber-50 overflow-hidden">
      <div className="flex flex-col items-center container mx-auto py-8 sm:py-10 px-4 sm:px-8">

        <div className="relative mt-4">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 -rotate-6 bg-purple-300 border-4 border-black rounded-full"
          />
          <img
            src={imageURL.href}
            alt="Profile"
            className="relative w-20 h-20 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-black"
          />
        </div>

        <h1 className="mt-8 font-mono font-black leading-[0.85] text-center">
          <span className="block text-5xl sm:text-7xl md:text-8xl tracking-tighter">AMRIT</span>
          <span className="inline-block mt-3 -rotate-1 bg-yellow-300 border-4 border-black px-3 py-1 text-5xl sm:text-7xl md:text-8xl tracking-tighter shadow-[6px_6px_0px_0px_black]">
            BHARDWAJ
          </span>
        </h1>

        <div className="flex gap-5 sm:gap-8 mt-9">
          {SOCIAL_DATA.map((social, i) => {
            const Icon = social.icon;
            const isResume = social.name.toLowerCase() === 'resume';
            const bgColors = ["bg-blue-200", "bg-purple-300", "bg-red-300", "bg-green-200", "bg-yellow-200"];

            return (
              <a
                key={social.name}
                href={isResume ? resumeURL.href : social.href}
                download={isResume ? 'Amrit_Bhardwaj_Resume.pdf' : undefined}
                target={isResume || social.isEmail ? "_self" : "_blank"}
                rel={isResume || social.isEmail ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 border-4 border-black rounded-xl transition-all duration-200 ${bgColors[i % bgColors.length]}
                hover:-rotate-6 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_black]`}
              >
                <Icon size={26} strokeWidth={2.5} />
              </a>
            );
          })}
        </div>
      </div>

      <div className="border-y-4 border-black bg-black py-3 -mx-[calc((100vw-100%)/2)]">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8 pr-8 shrink-0">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 font-mono font-black text-lg sm:text-2xl text-amber-50 whitespace-nowrap"
                >
                  {item}
                  <span className="text-[#ffb3ba]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
