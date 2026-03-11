import { NavLink } from "react-router";
const Navbar = () => {
  const baseStyle = "px-6 py-2 border-2 border-black rounded-lg font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none";

  return (
    <nav className="flex flex-nowrap overflow-x-auto gap-2 sm:gap-4 p-3 sm:p-8 justify-center bg-amber-50">
      <div className="flex gap-2 sm:gap-4">
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          `${baseStyle} ${isActive ? "bg-[#BDE3FF]" : "bg-white"}`
        }
      >
        ABOUT
      </NavLink>

            <NavLink 
        to="/experience" 
        className={({ isActive }) => 
          `${baseStyle} ${isActive ? "bg-[#BDE3FF]" : "bg-white"}`
        }
      >
        EXPERIENCE
      </NavLink>

      <NavLink 
        to="/stack" 
        className={({ isActive }) => 
          `${baseStyle} ${isActive ? "bg-[#BDE3FF]" : "bg-white"}`
        }
      >
        STACK
      </NavLink>

      <NavLink 
        to="/projects" 
        className={({ isActive }) => 
          `${baseStyle} ${isActive ? "bg-[#BDE3FF]" : "bg-white"}`
        }
      >
        PROJECTS
      </NavLink>

      <NavLink 
        to="/achievements" 
        className={({ isActive }) => 
          `${baseStyle} ${isActive ? "bg-[#BDE3FF]" : "bg-white"}`
        }
      >
        ACHIEVEMENTS
      </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;