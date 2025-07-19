import React from "react";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    title: "Explainable Health Optimizer",
    desc: "ML-powered clinical decision tool using SHAP & Streamlit to predict patient readmissions.",
    tech: ["Python", "Pandas", "SHAP", "Streamlit"],
    image: "/projects/health.png",
    github: "https://github.com/shrey-Bish/explainable-health-optimizer",
    live: "https://health-dashboard.streamlit.app",
    paper: "https://example.com/research-health"
  },
  {
    title: "Plant Disease Detection",
    desc: "Leaf segmentation + feature extraction + 97.5% accuracy using Random Forest.",
    tech: ["Python", "OpenCV", "Flask", "HDF5"],
    image: "/projects/plant.png",
    github: "https://github.com/shrey-Bish/plant-disease-detection",
    live: "https://plant-disease-app.vercel.app",
    paper: "https://example.com/research-plant"
  },
  {
    title: "Hinglish Sentiment Analysis",
    desc: "Code-mixed text analysis using CNN & vector embeddings like Word2Vec.",
    tech: ["Python", "TF-IDF", "Word2Vec", "CNN"],
    image: "/projects/sentiment.png",
    github: "https://github.com/shrey-Bish/hinglish-sentiment",
    live: "https://sentiment-ui.netlify.app",
    paper: "https://example.com/research-sentiment"
  },
  {
    title: "ValoEmpire",
    desc: "Valorant account trading MERN app with JWT-based auth and MongoDB backend.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/valo.png",
    github: "https://github.com/shrey-Bish/valoempire",
    live: "https://valoempire.com",
    paper: "https://example.com/research-valoempire"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-[#0f0f1b] to-[#1b1b2f] text-white font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-fuchsia-400 mb-20 tracking-wide font-mono">
          Projects
        </h2>

        <div className="space-y-20">
          {projects.map((p, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 bg-[#12121c] p-6 rounded-2xl shadow-md shadow-fuchsia-900/30"
            >
              <div className="w-full md:w-1/3">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-52 object-cover rounded-xl border border-fuchsia-900/20"
                />
              </div>

              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-3xl font-semibold text-fuchsia-300 font-mono">{p.title}</h3>
                <p className="text-slate-300 text-[15px] leading-relaxed font-light">{p.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="bg-fuchsia-900/20 text-fuchsia-300 px-3 py-1 rounded-full text-xs font-medium tracking-wide shadow-inner"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a
                    href={p.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-200 transition"
                  >
                    <FileText size={18} /> Research Paper
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
