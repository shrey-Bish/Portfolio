import React from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer",
      company: "ZS Associates, India",
      duration: "Sep 2023 - June 2025",
      points: [
        "Developed and deployed an internal platform to replace legacy ETL systems, reducing processing time by 40% and enhancing scalability.",
        "Processed over 1 million records to ensure data accuracy and optimized workflows using MySQL, PostgreSQL, and Excel.",
        "Engaged directly with clients to gather requirements, configure data workflows, and maintain alignment with business goals, resulting in a 95% satisfaction rate.",
        "Optimized SQL queries to improve execution time by 30%, enabling faster analytics and reporting."
      ]
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "Andwemet Pvt, India",
      duration: "Jun 2021 – Oct 2021",
      points: [
        "Developed 'Icebreakers', a full-stack feature using MERN stack to enhance social interactions and user experience.",
        "Improved website speed by 40% through API optimization and bug fixes.",
        "Reduced bounce rate by 50% with UX enhancements informed by Google Analytics insights.",
        "Built secure media storage with DigitalOcean for over 250 assets, reducing backup time by 25%."
      ]
    },
    {
      role: "Front End and Cloud DevOps Intern",
      company: "Dreadnought School, USA",
      duration: "Jun 2022 – Aug 2022",
      points: [
        "Built responsive front-end interfaces using ReactJS and developed AWS-based DevOps infrastructure to ensure scalable deployments.",
        "Delivered 10+ projects while coordinating cross-team efforts and aligning deliverables with internal stakeholders."
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
      <h2 className="text-5xl font-bold text-center text-fuchsia-400 mb-16 tracking-wide underline underline-offset-8 decoration-fuchsia-500">
  Experience
</h2>


        <div className="space-y-12">
          {experiences.map((exp, index) => (
           <div key={index} className="flex flex-col md:flex-row md:gap-10 gap-4 bg-[#0f172a] border-l-4 border-fuchsia-500 pl-6 pr-4 py-6 rounded-xl">
           <div className="text-sm md:text-base text-gray-400 md:w-1/4 text-center md:text-left font-medium">
             {exp.duration}
           </div>
           <div className="md:w-3/4">
             <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
               {exp.role}{" "}
               <span className="text-fuchsia-400 font-medium">– {exp.company}</span>
             </h3>
             <ul className="list-disc list-inside text-gray-300 space-y-2 mt-2 leading-relaxed text-[15px]">
               {exp.points.map((point, i) => (
                 <li key={i}>{point}</li>
               ))}
             </ul>
           </div>
         </div>
         
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Experience;