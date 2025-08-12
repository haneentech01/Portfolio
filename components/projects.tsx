"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "@/data/Skills";
import projectIcon from "../assets/projects/projectIcon.svg";
import github from "../assets/projects/GitHub.png";
import external from "../assets/projects/external.svg";

const Projects = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="bg-primaryBlue relative flex flex-col" id="portfolio">
      {/* Main Content */}
      <div className="mt-9 lg:mt-16 mx-6 xl:mx-28 relative">
        {/* Title Section */}
        <div className="relative text-white mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-oswald mb-4">
            My Projects
            <div className="hidden xl:block w-20 h-20 absolute top-1 -left-20 md:-left-24">
              <Image src={projectIcon} alt="Project Icon" fill />
            </div>
          </h2>
          <div className="absolute w-[48%] md:w-[67%] lg:w-[71%] xl:w-[78%] h-2 rounded bg-primaryYallow top-6 right-0"></div>
          <p className="text-lg md:text-xl font-inter mt-6 max-w-2xl">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="bg-gradient-to-br from-[#1a2332] to-[#0d1117] border-2 border-sky-500/30 rounded-xl overflow-hidden hover:border-primaryYallow/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primaryYallow mb-3 font-oswald">
                  {project.title}
                </h3>

                <p className="text-white/90 text-sm mb-4 line-clamp-3 font-inter">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-sky-500/20 text-sky-300 rounded-md border border-sky-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-sky-500 text-white text-sm rounded-lg hover:bg-sky-500/10 transition-all duration-300 flex-1 justify-center"
                  >
                    <Image src={github} alt="GitHub" width={16} height={16} />
                    GitHub
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-primaryYallow text-[#00071E] text-sm rounded-lg hover:bg-primaryYallow/90 transition-all duration-300 flex-1 justify-center font-medium"
                    >
                      <Image src={external} alt="Demo" width={16} height={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Decorative Elements */}
        <div className="hidden xl:block absolute -right-10 top-20 w-20 h-20 opacity-20">
          <Image src={projectIcon} alt="Decorative" fill />
        </div>
      </div>
    </section>
  );
};

export default Projects;