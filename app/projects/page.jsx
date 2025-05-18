'use client';
import React, { useState } from 'react';
import { motion } from "motion/react";
import { workData } from '@/assets/assets';

const categories = ["All", "Frontend", "Backend", "Fullstack", "UI/UX", "WordPress"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      className="w-full min-h-screen px-4 sm:px-8 md:px-[12%] py-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Top back link */}
      <motion.a
        href="/"
        className="text-sm text-gray-500 hover:text-black transition flex items-center mb-10 w-max"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        ← Back to Home
      </motion.a>

      <motion.h2
        className="text-5xl font-Ovo text-center mb-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        All Projects
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-700 mb-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Explore categorized projects across frontend, fullstack, WordPress, and UI/UX.
      </motion.p>

      {/* Filter Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-full border font-medium ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-white text-black border-gray-300"
            } transition`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition bg-white"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Back Button */}
      <motion.a
        href="/"
        className="block w-max mx-auto mt-20 px-8 py-3 border border-black text-black rounded-full hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
      >
        ← Back to Home
      </motion.a>
    </motion.div>
  );
}
