import React from "react";
import { portfolioData } from "../data/data";
import { FiMail, FiLinkedin, FiSend } from "react-icons/fi";

function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section
      id="Contact"
      className="relative px-6 md:px-16 lg:px-24 py-28 bg-[#05050a] border-t border-white/[0.04] scroll-mt-24 overflow-hidden selection:bg-purple-500/30 selection:text-purple-200"
    >
      {/* Heavy Deep Background Cyber Lights */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/[0.07] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Dynamic Agency Label Tag */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-purple-400 mb-2">
            Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="h-[2px] w-8 bg-purple-500 mt-4 rounded-full" />
        </div>

        {/* Premium Core Pitch */}
        <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-14">
          Open to core architecture engineering roles, deep freelance builds, or just a 
          technical conversation over coffee about robust web scaling systems.
        </p>

        {/* Minimalist Bento Contact Grid Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">

          {/* Email Channel Action Card */}
          <a
            href={`mailto:${personalInfo?.email}`}
            className="group relative flex items-center justify-between p-5 rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl shadow-xl hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                <FiMail className="text-base" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Direct Channel</p>
                <p className="text-sm font-medium text-gray-300 mt-0.5 break-all">{personalInfo?.email}</p>
              </div>
            </div>
            <FiSend className="text-gray-600 group-hover:text-purple-400 text-xs transition-colors duration-300 hidden sm:block" />
          </a>

          {/* LinkedIn Network Action Card */}
          <a
            href={personalInfo?.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group relative flex items-center justify-between p-5 rounded-2xl border border-white/[0.05] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-xl shadow-xl hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-purple-500/5 border border-purple-500/10 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                <FiLinkedin className="text-base" />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Professional</p>
                <p className="text-sm font-semibold text-gray-300 mt-0.5">Connect on LinkedIn</p>
              </div>
            </div>
            <span className="text-gray-600 group-hover:text-purple-400 text-xs font-mono transition-colors duration-300 hidden sm:block">↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;