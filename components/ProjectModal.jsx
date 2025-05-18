import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ProjectModal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Modal Card */}
        <motion.div
          className="bg-white rounded-xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl font-bold"
          >
            ✖
          </button>

          {/* Modal Content */}
          <div className="grid md:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square">
              <Image
                src={project.bgImage}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {project.description}
                </p>
                {project.techStack && (
                  <p className="text-xs text-gray-500 mb-2">
                    <strong>Tech Stack:</strong> {project.techStack}
                  </p>
                )}
              </div>

              <div className="flex gap-3 mt-4">
                {project.websiteLink && (
                  <a
                    href={project.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-300 transition"
                  >
                    Live Site
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black px-4 py-2 rounded-full text-sm font-medium hover:bg-lime-300 transition"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;