import React from "react";
import { portfolioData } from "../data/data";
import { FiDownload, FiCheckCircle } from "react-icons/fi";

// Passed scrollTo as a destructuring prop cleanly
function About({ scrollTo }) {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="About"
      className="relative px-6 md:px-16 lg:px-24 py-24 bg-[#05050a] overflow-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Background Micro Glow Layer */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Modern Sub-Header layout */}
        <div className="flex flex-col mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-2">
            Discovery
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Who I Am
          </h2>
          <div className="h-[2px] w-12 bg-purple-500 mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT SIDE: STORY & DIRECT CALL-TO-ACTIONS */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed font-light">
              {personalInfo?.summary}
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              I specialize in building scalable backend systems using Python and
              Django. I focus on designing robust APIs, clean architecture, and
              high-performance server-side applications.
            </p>

            {/* CONSOLIDATED ACTION MATRIX: HIRE ME HUB */}
            <div className="pt-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-4">
                Let's Build Something Premium
              </h4>

              <div className="flex flex-wrap items-center gap-4">
                {/* Main Hire Me CTA / Triggering Smooth Scroll handler */}
                <button
                  onClick={() => scrollTo("Contact")}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(147,51,234,0.25)] hover:shadow-[0_4px_25px_rgba(147,51,234,0.45)] hover:translate-y-[-2px] transition-all duration-300 cursor-pointer"
                >
                  Hire Me
                </button>

                {/* Download Resume Link Anchor */}
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-white/[0.08] bg-white/[0.02] text-gray-300 font-medium text-sm hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <FiDownload className="text-xs text-purple-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: INTERACTIVE MONOSPACE TERMINAL */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative rounded-2xl border border-white/[0.08] bg-[#09090f]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
              {/* Terminal Window Header (Mac Style) */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                </div>
                <span className="text-[10px] uppercase font-bold text-gray-600 tracking-wider">
                  developer.json
                </span>
              </div>

              {/* JSON Content Layout - Trailing Commas Cleaned */}
              <div className="p-6 md:p-8 space-y-4 text-gray-400 leading-relaxed">
                <div>
                  <span className="text-purple-400">{"{"}</span>

                  <div className="pl-4 md:pl-6 mt-1.5">
                    <span className="text-blue-400">"core_interest"</span>:{" "}
                    <span className="text-emerald-300">
                      "Backend Logic & Scalable Architectures"
                    </span>,
                  </div>

                  <div className="pl-4 md:pl-6 mt-1.5">
                    <span className="text-blue-400">"fuel"</span>:{" "}
                    <span className="text-emerald-300">
                      "Premium Roast Coffee ☕"
                    </span>,
                  </div>

                  <div className="pl-4 md:pl-6 mt-1.5">
                    <span className="text-blue-400">"beyond_code"</span>:{" "}
                    <span className="text-emerald-300">
                      "Immersive Fictional Books 📚"
                    </span>,
                  </div>

                  <div className="pl-4 md:pl-6 mt-1.5">
                    <span className="text-blue-400">"stack"</span>:{" "}
                    <span className="text-purple-300">
                      ["Python", "Django", "REST APIs"]
                    </span>,
                  </div>

                  <div className="pl-4 md:pl-6 mt-1.5">
                    <span className="text-blue-400">"status"</span>:{" "}
                    <span className="text-amber-400">
                      "Building Backend Systems"
                    </span>
                  </div>

                  <span className="text-purple-400">{"}"}</span>
                </div>
              </div>

              {/* Mini Status Grid Tracker underneath the JSON output */}
              <div className="px-6 md:px-8 pb-6 pt-4 border-t border-white/[0.04] bg-white/[0.01]">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-3.5">
                  Backend Capabilities
                </p>

                <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-purple-400 text-xs shrink-0" />
                    <span>Django / DRF</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-purple-400 text-xs shrink-0" />
                    <span>REST APIs</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-purple-400 text-xs shrink-0" />
                    <span>Database Design</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-purple-400 text-xs shrink-0" />
                    <span>Backend Architecture</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;