import React from "react";
import { portfolioData } from "../data/data";

function Skills() {
  const { skills } = portfolioData;

  return (
    <section
      id="Skills"
      className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#05050a] scroll-mt-24 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Hyper-Premium Ambient Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Agency Standard Sub-Header Layout */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-2">
            Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Skills
          </h2>
          <div className="h-[2px] w-12 bg-purple-500 mt-4 rounded-full" />
        </div>

        {/* Premium Geometric Toolkit Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group relative p-6 md:p-8 rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-xl shadow-xl hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:translate-y-[-4px]"
            >
              {/* Soft Inner Hover Matrix Radial Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

              {/* Category Header Title */}
              <div className="flex items-center gap-3 mb-6 border-b border-white/[0.04] pb-4">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] group-hover:bg-pink-400 group-hover:shadow-[0_0_8px_rgba(244,114,182,0.8)] transition-all duration-300" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-purple-400 transition-colors duration-300">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </h3>
              </div>

              {/* Skills Interactive Badges Block */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.01] border border-white/[0.05] text-gray-400 hover:text-white hover:border-purple-500/30 hover:bg-purple-500/[0.03] hover:shadow-[0_2px_10px_rgba(147,51,234,0.1)] transition-all duration-300 cursor-default"
                  >
                    {skill}
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

export default Skills;