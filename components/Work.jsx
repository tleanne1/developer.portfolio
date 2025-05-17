import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
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
        Welcome to my web development portfolio! Explore a curated collection of projects showcasing my skills in frontend development, UI/UX, and secure coding.
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
            className="aspect-square relative rounded-xl overflow-hidden group shadow-lg"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105 group-hover:blur-sm"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />

            {/* Overlay content */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 bg-white/90 backdrop-blur-lg rounded-md px-5 py-4 flex flex-col gap-2 items-start justify-between transition-all duration-500 group-hover:bottom-7 shadow-md">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
                {project.techStack && (
                  <p className="mt-1 text-xs text-gray-500">🛠 {project.techStack}</p>
                )}
              </div>
              <div className="flex gap-3 mt-3">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black w-9 h-9 rounded-full flex items-center justify-center bg-white hover:bg-lime-300 transition"
                  title="View Live Site"
                >
                  <Image src={assets.send_icon} alt="Live site icon" className="w-5" />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-black w-9 h-9 rounded-full flex items-center justify-center bg-white hover:bg-lime-300 transition"
                  title="View Source Code"
                >
                  <Image src={assets.github_icon} alt="GitHub icon" className="w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="https://github.com/tleanne1?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-gray-100 transition duration-500"
        whileInView={{ scale: 1.05 }}
        transition={{ delay: 1 }}
      >
        Show more
        <Image src={assets.right_arrow_bold} alt="Right arrow icon" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
