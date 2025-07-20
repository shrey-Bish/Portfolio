import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
      {/* Portfolio Label */}
      <div className="absolute top-8 left-8 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
        Portfolio
      </div>

      {/* Social Icons */}
      <div className="absolute top-8 right-8 flex gap-5 text-white text-xl">
        <a href="https://www.linkedin.com/in/shrey-bishnoi" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-fuchsia-400 transition duration-300" />
        </a>
        <a href="https://github.com/shrey-Bish" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-fuchsia-400 transition duration-300" />
        </a>
      </div>

      {/* Left Content - Brief */}
      <div className="w-full lg:w-1/2 max-w-xl z-10 mb-16 lg:mb-0">
        <h1 className="text-7xl font-extrabold tracking-wide mb-4 leading-tight text-white">
          Shrey Bishnoi
        </h1>
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
          Software Engineer | Data Engineer
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed tracking-wide mb-6">
          A results-driven engineer who loves building scalable apps and powerful data pipelines.
          Currently exploring cutting-edge tech to deliver clean code, clean data, and impactful solutions.
        </p>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/185kkZGwvluqzEDZdNCf2DULmsO7jA78u/view?usp=sharing"
          download
          className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Content - Detailed About Me */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-5xl font-bold text-center text-white-400 mb-20 tracking-wide font-mono">
        About Me</h2>
        <div className="bg-[#202034] rounded-xl p-6 shadow-md text-slate-300 text-md leading-relaxed space-y-4">
          <p>
            Hey! I'm Shrey Bishnoi, a passionate and curious tech enthusiast with a strong foundation in both <span className="text-fuchsia-300 font-medium">Data Engineering</span> and <span className="text-fuchsia-300 font-medium">Software Development</span>. With hands-on experience building scalable applications and managing complex data pipelines, I love transforming ideas into real-world solutions that are efficient, reliable, and impactful.
          </p>
          <p>
            As a <span className="text-fuchsia-300 font-medium">Data Engineer</span>, I enjoy designing robust data architectures, building ETL pipelines, and working with cloud platforms to ensure data is clean, accessible, and insightful. From optimizing queries to handling big data workflows, I strive to bridge the gap between raw data and actionable insights.
          </p>
          <p>
            On the <span className="text-fuchsia-300 font-medium">Software Development</span> side, I specialize in building full-stack applications with modern technologies like React, Node.js, and Python. Whether it's crafting clean APIs or intuitive user experiences, I focus on writing code that's both maintainable and meaningful.
          </p>
          <p>
            I thrive in collaborative environments, enjoy taking ownership of my work, and am always upskilling to stay ahead in the tech landscape. Whether it's solving tough backend challenges or building intelligent systems, I’m driven by a deep desire to learn, build, and contribute.
          </p>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#education">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaArrowDown />
        </div>
      </a>
    </section>
  );
};

export default Hero;
