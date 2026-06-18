import React from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar({ NAV, active, scrollTo }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pointer-events-none">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 pointer-events-auto flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#09090f]/70 backdrop-blur-xl px-6 py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-300">
          
          {/* LOGO - Elegant Monospace Tech Style */}
          <button 
            onClick={() => scrollTo("Hero")} 
            className="text-xl font-black tracking-tight text-white flex items-center gap-1 group"
          >
            <span className="text-purple-400 font-mono transition-transform duration-300 group-hover:scale-110">&lt;</span>
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">YD</span>
            <span className="text-purple-400 font-mono transition-transform duration-300 group-hover:scale-110">/&gt;</span>
          </button>

          {/* NAV LINKS - Fluid Pill Design */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.04] p-1 rounded-xl backdrop-blur-md">
            {NAV.map((item) => {
              const isActive = active === item;
              return (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600/90 to-indigo-600/90 text-white shadow-[0_2px_10px_rgba(147,51,234,0.2)]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE ACTIONS - Premium Interaction */}
          <div className="flex items-center gap-4">
            {/* LinkedIn - Aesthetic Icon Button */}
            <a
              href="https://www.linkedin.com/in/yashika-dilliwal/" // Replace with your real URL
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center justify-center text-gray-400 hover:text-purple-400 text-lg transition-colors duration-300 p-2 hover:bg-white/[0.03] rounded-lg border border-transparent hover:border-white/[0.04]"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>

            {/* Resume - Sleek Border-Glow Button */}
            <a
              href="/resume.pdf"
              download
              className="group relative hidden md:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold uppercase tracking-wider shadow-[0_4px_15px_rgba(147,51,234,0.25)] hover:shadow-[0_4px_20px_rgba(147,51,234,0.45)] hover:translate-y-[-1px] active:translate-y-0 transition-all duration-300"
            >
              <FaDownload className="text-[10px] group-hover:translate-y-[1px] transition-transform duration-300" />
              <span>Resume</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </a>

            {/* Mobile Menu Icon */}
            <button className="md:hidden flex items-center justify-center text-gray-300 hover:text-white p-1.5 hover:bg-white/[0.05] rounded-xl border border-white/[0.04] text-xl transition-all">
              <HiOutlineMenuAlt3 />
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;