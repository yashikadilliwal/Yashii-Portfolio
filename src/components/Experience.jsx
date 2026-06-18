import React from "react";
import { portfolioData } from "../data/data";

function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="Experience"
      className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#05050a] scroll-mt-24 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Soft Ambient Dynamic Accent Lights */}
      <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Dynamic Agency Sub-Header */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-2">
            History
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience
          </h2>
          <div className="h-[2px] w-12 bg-purple-500 mt-4 rounded-full" />
        </div>

        {/* Timeline Dynamic Wrapper */}
        <div className="relative border-l border-white/[0.06] ml-2 md:ml-4 pl-6 md:pl-10 space-y-12">
          
          {experience.map((exp, index) => (
            <div key={exp.company || index} className="relative group">
              
              {/* Premium Pulsing Timeline Node */}
              <div className="absolute -left-[31px] md: -left-[47px] top-2 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#05050a] border-2 border-purple-500 flex items-center justify-center z-10 transition-all duration-300 group-hover:border-pink-400 group-hover:scale-110">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-pink-400 transition-colors" />
                </div>
                {/* Ping Radar Glow Wave effect on Hover */}
                <div className="absolute w-8 h-8 rounded-full bg-purple-500/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none" />
              </div>

              {/* Glassmorphic Production Card Layout */}
              <div className="relative p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl shadow-xl hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:translate-x-1.5">
                
                {/* Geometric Card Background Ambient Sheet */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/[0.02] to-transparent rounded-tr-2xl pointer-events-none" />

                {/* Header Metrics Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-white/[0.04] pb-4 mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-semibold text-gray-400 mt-0.5 tracking-wide">
                      {exp.role}
                    </p>
                  </div>
                  
                  {/* Duration Time Badge */}
                  <span className="self-start sm:self-center inline-block px-3 py-1 rounded-md text-[11px] font-mono font-medium text-gray-500 bg-white/[0.02] border border-white/[0.04]">
                    {exp.duration}
                  </span>
                </div>

                {/* Point Responsibilities Log Layout */}
                <ul className="space-y-3">
                  {exp.responsibilities.map((point, i) => (
                    <li
                      key={i}
                      className="text-gray-400 text-xs md:text-sm font-light leading-relaxed flex items-start gap-3 group/item"
                    >
                      {/* Premium Micro Custom Bullet Key */}
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/40 group-hover/item:bg-purple-400 transition-colors" />
                      <span className="group-hover/item:text-gray-300 transition-colors duration-200">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;