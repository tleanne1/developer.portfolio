"use client";
import React, { useState } from "react";
import Image from "next/image";
import { workData } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Fullstack", "Backend", "UI/UX", "WordPress"];
  const filteredProjects =
    activeCategory === "All"
      ? workData
      : workData.filter((project) => project.category === activeCategory);

  return (
    <main
      className="min-h-screen px-6 py-20 max-w-6xl mx-auto bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Back to Home Link */}
      <div className="mb-6">
        <a
          href="/"
          className="inline-block text-sm text-black-600 hover:underline transition"
        >
          ← Back to Home
        </a>
      </div>

      {/* Page Title */}
      <h1 className="text-4xl font-display text-center mb-8">My Projects</h1>

      {/* Animated Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 relative">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 rounded-full font-medium z-10 transition ${
              activeCategory === cat
                ? "text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 bg-black rounded-full z-[-1]"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow group"
              >
                <div
                  className="aspect-square bg-cover bg-center group-hover:scale-105 transition-all"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  <div className="mt-3 flex gap-4">
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline text-sm"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:underline text-sm"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.p
            key="empty"
            className="text-center text-gray-500 italic mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects in this category... yet!
          </motion.p>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ProjectsPage;
