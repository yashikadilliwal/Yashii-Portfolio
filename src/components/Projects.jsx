import React from "react";
import { portfolioData } from "../data/data";
import { FiFolder, FiExternalLink } from "react-icons/fi";

function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="Projects"
      className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#05050a] scroll-mt-24 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Premium Fluid Mesh Glow Background */}
      <div className="absolute top-[-10%] left-[30%] w-[500px] h-[500px] bg-indigo-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Agency Sub-Header Layout */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-2">
            Showcase
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Projects
          </h2>
          <div className="h-[2px] w-12 bg-purple-500 mt-4 rounded-full" />
        </div>

        {/* Responsive Premium Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title || i}
              className="group relative flex flex-col justify-between p-6 md:p-7 rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl shadow-xl hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:translate-y-[-4px]"
            >
              {/* Radial Micro Background Glow over hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Interactive Row Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-purple-400 group-hover:text-pink-400 group-hover:border-purple-500/20 transition-all duration-300">
                    <FiFolder className="text-lg" />
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-medium text-gray-500 bg-white/[0.02] px-2.5 py-1 rounded-md border border-white/[0.04]">
                      {p.year || "2026"}
                    </span>
                    {/* <FiExternalLink className="text-gray-600 group-hover:text-purple-400 text-sm transition-colors duration-300" /> */}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-purple-400 transition-colors duration-300 mb-3">
                  {p.title}
                </h3>

                {/* Mini Description Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {p.description.slice(0, 2).map((desc, idx) => (
                    <li
                      key={idx}
                      className="text-gray-400 text-xs md:text-sm font-light leading-relaxed flex items-start gap-2.5"
                    >
                      <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/30 group-hover:bg-purple-400 transition-colors" />
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticky Tech Badges Matrix Bottom */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04] mt-auto">
                {p.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.02] border border-white/[0.05] text-gray-400 group-hover:border-purple-500/15 group-hover:text-gray-300 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;  