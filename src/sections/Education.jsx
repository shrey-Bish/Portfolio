// src/components/Education.jsx
import React from "react";

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

const Education = () => {
  return (
    <section id="education" className="min-h-screen px-6 py-20 bg-gradient-to-b from-[#0f0f1b] to-[#1b1b2f] text-white font-sans">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-16 text-center text-fuchsia-400 tracking-wide">
          Education
        </h2>

        <div className="space-y-14">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start md:gap-10"
            >
              <div className="md:w-1/4 text-sm md:text-base text-slate-400 font-mono">
                {edu.duration}
              </div>

              <div className="md:w-3/4 bg-[#202034] rounded-2xl p-6 shadow-xl hover:shadow-fuchsia-500/30 transition-all duration-300">
                <h3 className="text-2xl font-bold text-fuchsia-300 mb-1">
                  {edu.institution}
                </h3>
                <p className="text-lg text-slate-200">{edu.degree}</p>
                <p className="mt-2 text-sm text-slate-400">{edu.location}</p>

                {edu.grade && (
                  <div className="mt-4 inline-block bg-fuchsia-700/20 text-fuchsia-300 px-3 py-1 rounded-full text-xs font-semibold shadow-md shadow-fuchsia-900/30">
                    GPA: {edu.grade}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
