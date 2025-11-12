import React from 'react';
import ProjectCard from './ProjectCard';
import PortFolioImage from '../assets/image/PortFolioWebisteSS.jpeg'
import CarrerFinderImage from "../assets/image/CarrierFinderImage.jpeg"

const Project = () => {
  const projects = [
    {
      name: "Portfolio Website",
      desc: "Modern responsive portfolio with React and Tailwind CSS featuring animations and optimized performance.",
      image: PortFolioImage,
      languages: ["React", "Tailwind CSS", "JavaScript"],
      gitlink: "https://github.com/sanjeev0101010/Potofolio-Website",
      livelink: "#",
    },
    {
      name: "Career Finder Platform",
      desc: "Full-stack job portal with authentication and responsive design using MERN stack.",
      image: CarrerFinderImage,
      languages: ["React", "Node.js", "MongoDB", "Express"],
      gitlink: "#",
      livelink: "#",
    },
  ];

  return (
    <section
      id="Projects"
      className="w-full py-12 bg-white"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 px-4">
        <h3 className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
          PROJECTS
        </h3>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          My Work
        </h1>
        <p className="text-gray-600">
          Showcasing my expertise in modern web development
        </p>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <ProjectCard
                ProjectName={proj.name}
                ProjectDesc={proj.desc}
                ProjectImage={proj.image}
                Languages={proj.languages}
                Gitlink={proj.gitlink}
                Livelink={proj.livelink}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          More projects coming soon...
        </p>
      </div>
    </section>
  );
};

export default Project;