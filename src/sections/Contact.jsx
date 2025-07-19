import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[#1b1b2f] to-[#0f0f1b] text-white font-sans border-t border-fuchsia-800"
    >
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-fuchsia-400 mb-6 tracking-wide">
          Get in Touch
        </h2>
        <p className="text-slate-300 mb-3 text-lg">
          sbishnoi2000.sb@gmail.com
        </p>
        <p className="text-slate-300 mb-6 text-lg">+91 6396690191</p>
        <a
          href="https://www.linkedin.com/in/shrey-bishnoi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-fuchsia-300 border border-fuchsia-500 px-6 py-2 rounded-full hover:bg-fuchsia-600 hover:text-white hover:shadow-md transition-all duration-200"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
};

export default Contact;
