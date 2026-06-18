import React from "react";
import HeroImg from "../img/Yashi-hero.jpeg";
import { useTypewriter } from "./useTypewriter";

function Hero({ data, scrollTo }) {
  const nameParts = data?.name
    ? data.name.split(" ")
    : ["Creative", "Developer"];
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  const texts = ["Python Developer", "Django Engineer", "Backend Developer"];
  const typedText = useTypewriter(texts, 80, 1200);

  return (
    <section
      id="Hero"
      className="relative min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:px-24 pt-28 pb-20 bg-[#05050a] overflow-hidden selection:bg-purple-600/40 selection:text-white"
    >
      {/* Hyper-Premium Layered Mesh Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/10 to-purple-600/5 blur-[160px] rounded-full pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-purple-600/10 to-pink-600/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Futuristic Deep Subtle Grid Matrix */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* LEFT SIDE: CONTEXT & TYPOGRAPHY */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/20 mb-8 backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <p className="text-purple-300 tracking-[0.25em] uppercase text-[9px] font-semibold tracking-wider">
              Available For Work
            </p>
          </div>

          {/* Premium High-Contrast Header */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.05] drop-shadow-sm">
            {firstName}{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              {lastName}
            </span>
          </h1>

          {/* Locked Height Typewriter (No Content Jumping) */}
          <div className="mt-5 min-h-[32px] flex items-center">
            <p className="text-lg md:text-xl font-medium text-gray-400 flex flex-wrap items-center gap-2">
              <span className="text-gray-500 font-light">Specialized in</span>
              <span className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300 font-bold tracking-wide border-r-2 border-purple-400/80 pr-1 animate-shimmer">
                {typedText}
              </span>
            </p>
          </div>

          <p className="mt-6 text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-xl opacity-90">
            {data?.summary ||
              "Crafting fluid digital experiences with architectural precision. Focused on building highly scalable backends, clean API architectures, and minimalist design interfaces."}
          </p>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button
              onClick={() => scrollTo("Projects")}
              className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm tracking-wide shadow-[0_4px_20px_rgba(147,51,234,0.25)] hover:shadow-[0_6px_30px_rgba(147,51,234,0.45)] transition-all duration-300 hover:translate-y-[-2px]"
            >
              <span className="relative z-10">Explore Showcase</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            {/* Changed from <a> to <button> to use dynamic custom smooth scrollTo */}
            <button
              onClick={() => scrollTo("Contact")}
              className="px-8 py-4 rounded-xl border border-white/10 bg-white/[0.02] text-gray-300 font-medium text-sm tracking-wide hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center cursor-pointer"
            >
              Let's Collaborate
            </button>
          </div>

          {/* Metric Elements */}
          <div className="mt-16 pt-8 border-t border-white/[0.06] max-w-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                [
                  "4+",
                  "Real-World Projects",
                  "from-purple-500/20 to-transparent",
                ],
                [
                  "Django",
                  "Core Architecture",
                  "from-indigo-500/20 to-transparent",
                ],
                [
                  "REST APIs",
                  "Backend Engineering",
                  "from-pink-500/20 to-transparent",
                ],
              ].map(([num, label, gradient]) => (
                <div
                  key={label}
                  className="relative group p-4 rounded-2xl border border-white/[0.03] bg-gradient-to-br from-white/[0.02] to-transparent hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 blur-sm -z-10`}
                  />
                  <span className="block text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 tracking-tight group-hover:from-purple-400 group-hover:to-indigo-300 transition-colors duration-300">
                    {num}
                  </span>
                  <span className="block text-[11px] text-gray-400 font-medium tracking-wide mt-1 group-hover:text-gray-200 transition-colors duration-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: HERO IMAGE FRAME */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-4 lg:mb-0">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none px-4">
            <div className="absolute top-10 left-10 right-4 bottom-0 bg-gradient-to-tr from-purple-600/20 to-indigo-600/20 rounded-[2.5rem] blur-3xl opacity-80 pointer-events-none" />
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:8px_8px] opacity-60 hidden sm:block" />

            <div className="relative aspect-[4/5] w-full rounded-[2.2rem] overflow-hidden border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-3 backdrop-blur-3xl shadow-2xl">
              <div className="w-full h-full rounded-[1.6rem] overflow-hidden relative group">
                <img
                  src={HeroImg}
                  alt={data?.name || "Portfolio presentation"}
                  className="w-full h-full object-cover contrast-[1.02] brightness-[0.98] transition-all duration-700 ease-out scale-[1.02] group-hover:scale-100"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
