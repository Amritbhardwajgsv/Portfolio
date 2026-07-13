import { SOCIAL_DATA } from "../utils/socials";

const imageURL = new URL('../utils/image.png', import.meta.url);
const resumeURL = new URL('../../public/resume.pdf', import.meta.url);

export default function Hero() {
  return (
    <header className="max-w-[720px] mx-auto px-5 pt-16 pb-8">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={imageURL.href}
          alt="Amrit Bhardwaj"
          className="w-16 h-16 rounded-full object-cover border border-border shrink-0"
        />
        <div>
          <h1 className="font-display font-bold text-[40px] leading-none tracking-[-0.02em] text-text-primary">
            Amrit Bhardwaj
          </h1>
          <p className="font-mono text-sm text-text-secondary mt-2">
            Full-Stack &amp; AI Engineer · Gati Shakti Vishwavidyalaya
          </p>
        </div>
      </div>

      <p className="text-[20px] text-text-secondary max-w-prose mb-6">
        Building real-time backends, ML-driven platforms, and production systems.
      </p>

      <div className="flex gap-4">
        {SOCIAL_DATA.map((social) => {
          const Icon = social.icon;
          const isResume = social.name.toLowerCase() === 'resume';

          return (
            <a
              key={social.name}
              href={isResume ? resumeURL.href : social.href}
              download={isResume ? 'Amrit_Bhardwaj_Resume.pdf' : undefined}
              target={isResume || social.isEmail ? "_self" : "_blank"}
              rel={isResume || social.isEmail ? undefined : "noopener noreferrer"}
              aria-label={social.name}
              className="inline-flex items-center justify-center w-9 h-9 rounded-md text-text-secondary hover:text-accent transition-colors duration-150"
            >
              <Icon size={20} strokeWidth={1.75} />
            </a>
          );
        })}
      </div>
    </header>
  );
}
