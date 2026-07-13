import { NavLink } from "react-router";
import { User, Briefcase, Layers, FolderGit2, Trophy } from "lucide-react";

const NAV_ITEMS = [
  { to: "/", label: "ABOUT", short: "About", icon: User },
  { to: "/experience", label: "EXPERIENCE", short: "Work", icon: Briefcase },
  { to: "/stack", label: "STACK", short: "Stack", icon: Layers },
  { to: "/projects", label: "PROJECTS", short: "Projects", icon: FolderGit2 },
  { to: "/achievements", label: "ACHIEVEMENTS", short: "Wins", icon: Trophy }
];

const Navbar = () => {
  return (
    <>
      {/* Desktop / tablet top nav */}
      <nav className="hidden sm:flex flex-nowrap overflow-x-auto gap-3 p-6 sm:p-8 justify-center bg-amber-50">
        <div className="flex gap-3 sm:gap-4">
          {NAV_ITEMS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-6 py-2 border-4 border-black font-mono font-black text-sm tracking-tight shadow-[4px_4px_0px_0px_black] transition-all hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_black] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ${
                  isActive ? "bg-[#BDE3FF] -rotate-1" : "bg-white rotate-0"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Mobile fixed bottom tab bar */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t-4 border-black flex">
        {NAV_ITEMS.map(({ to, short, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 font-mono text-[10px] font-bold border-r-2 border-black last:border-r-0 ${
                isActive ? "bg-[#BDE3FF]" : "bg-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={20} strokeWidth={isActive ? 2.75 : 2} />
                <span>{short}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
