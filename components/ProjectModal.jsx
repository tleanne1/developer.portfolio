'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4"
      onClick={onClose} // allows clicking the backdrop to close
    >
      <motion.div
        onClick={(e) => e.stopPropagation()} // prevents click inside modal from closing it
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-2xl w-[90%] max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl p-6 sm:p-10"
      >
        {/* ✕ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black bg-white rounded-full p-2 z-50 shadow hover:scale-105 transition sm:top-6 sm:right-6"
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Project Image */}
        <div className="mb-6">
          <div
            className="w-full h-48 sm:h-64 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          />
        </div>

        {/* Project Content */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-6 text-sm sm:text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href={project.websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Live Site
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 transition text-sm sm:text-base"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
