import React from "react";
import { portfolioData } from "../data/data";

function Footer() {
  const { personalInfo } = portfolioData;
  const targetName = personalInfo?.name || "Yashika dilliwal";

  return (
    <footer className="border-t border-white/[0.04] bg-[#05050a] px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        
        <p className="text-xs font-mono tracking-wide text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-sans font-medium transition-colors duration-300 hover:text-purple-400">
            {targetName}
          </span>
          <span className="text-gray-600"> . All Rights Reserved.</span>
        </p>

        <p className="text-xs font-light tracking-wider text-gray-400">
          Developed & Created  by{" "}
          <span className="font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            {targetName}
          </span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;