"use client";
import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Frontend", "Fullstack", "Backend", "WordPress", "UI/UX"];

  const filteredProjects =
    selectedCategory === "All"
      ? workData
      : workData.filter((project) => project.category === selectedCategory);

  return (
    <motion.div
      className="w-full min-h-screen px-[12%] py-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-gray-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <h1 className="text-4xl font-Ovo text-center mb-10">All Projects</h1>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border transition-all duration-300 ${
              selectedCategory === category
                ? "bg-black text-white border-black"
                : "border-gray-400 text-gray-600 hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden shadow group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.category}</p>
              <div className="flex gap-3 mt-4">
                <a
                  href={project.websiteLink}
                  target="_blank"
                  className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="bg-white text-black px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
