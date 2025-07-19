import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaXTwitter, FaArrowDown } from "react-icons/fa6";

const educationData = [
  {
    institution: "Arizona State University",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2025 - July 2027",
    location: "Tempe, US",
    grade: null,
  },
  {
    institution: "Maharaja Agrasen Institute Of Technology",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "Aug 2019 - July 2023",
    location: "Delhi, India",
    grade: "8.99 / 10",
  },
];

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f1b] to-[#1b1b2f] text-white px-10 py-20 flex flex-col lg:flex-row items-center justify-between relative overflow-hidden font-sans">
      {/* Portfolio Label */}
      <div className="absolute top-8 left-8 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
        Portfolio
      </div>

      {/* Social Icons */}
      <div className="absolute top-8 right-8 flex gap-5 text-white text-xl">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-fuchsia-400 transition duration-300" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-fuchsia-400 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-fuchsia-400 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="hover:text-fuchsia-400 transition duration-300" />
        </a>
      </div>

      {/* Left Content */}
      <div className="w-full lg:w-1/2 max-w-xl z-10 mb-16 lg:mb-0">
        <h1 className="text-7xl font-extrabold tracking-wide mb-4 leading-tight text-white">
          Kevin Rush
        </h1>
        <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 mb-6">
          Full Stack Developer
        </h2>
        <p className="text-slate-300 text-lg leading-relaxed tracking-wide mb-6">
          I am a passionate full stack developer with a knack for crafting robust and scalable
          web applications. With 5 years of hands-on experience, I specialize in building modern,
          responsive apps using React, Next.js, Node.js, and MongoDB — delivering products that
          are both elegant and functional.
        </p>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300"
        >
          Download Resume
        </a>
      </div>

      {/* Right Content: Education */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-4xl font-bold mb-8 text-fuchsia-400">Education</h2>
        <div className="space-y-10">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-[#202034] rounded-xl p-5 shadow-md">
              <div className="text-sm text-slate-400 mb-2">{edu.duration}</div>
              <h3 className="text-xl font-semibold text-fuchsia-300 mb-1">
                {edu.institution}
              </h3>
              <p className="text-slate-200">{edu.degree}</p>
              <p className="mt-1 text-sm text-slate-400">{edu.location}</p>
              {edu.grade && (
                <div className="mt-3 inline-block bg-fuchsia-700/20 text-fuchsia-300 px-3 py-1 rounded-full text-xs font-semibold">
                  GPA: {edu.grade}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#experience">
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce opacity-60 hover:opacity-100 transition-opacity duration-300">
          <FaArrowDown />
        </div>
      </a>
    </section>
  );
};

export default Hero;