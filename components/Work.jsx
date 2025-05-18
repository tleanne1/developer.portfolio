import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import ProjectModal from "./ProjectModal";
import Link from "next/link";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        My portfolio
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Explore my featured projects — built with clean code, secure practices, and user-focused design.
      </motion.p>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="aspect-square relative rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition duration-300 px-4">
              <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white text-sm bg-black/30 px-3 py-1 rounded-full">
                Click to view project
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Caption Below Grid */}
      <p className="text-center text-sm text-gray-500 italic mb-16">
        Click on any project image to view full details and links.
      </p>

      {/* ✅ View More Projects Button (using Link) */}
      <motion.div
        whileInView={{ scale: 1.05 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/projects"
          className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-gray-100 transition duration-500"
        >
          View More
          <Image
            src={assets.right_arrow_bold}
            alt="Right arrow icon"
            className="w-4"
          />
        </Link>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </motion.div>
  );
};

export default Work;