import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          {assets.user_image && (
            <Image
              src={assets.user_image}
              alt="User portrait"
              className="w-full rounded-3xl"
            />
          )}
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-700 font-Ovo">
            Who I Am
          </h3>
          <p className="mb-10 max-w-2xl font-Ovo text-gray-800 leading-relaxed">
            I'm a Frontend Developer skilled in modern technologies like HTML,
            CSS, JavaScript, React, Tailwind CSS, Next.js, and Node.js. I create
            interactive, performance-optimized UIs that deliver high-quality user
            experiences. I also work with Python, enabling seamless interaction
            between frontend and backend systems.
            <br />
            <br />
            In addition to frontend expertise, I have experience in cybersecurity,
            specializing in vulnerability management and threat detection. This
            combination allows me to prioritize secure coding practices while
            building accessible, engaging applications.
            <br />
            <br />
            I'm constantly learning and exploring new technologies, pushing the
            boundaries of what's possible — one line of code at a time.
          </p>

          {/* Info Cards */}
          <motion.ul
            whileInView={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:-translate-y-1 transition duration-500 hover:shadow-md"
              >
                {icon && <Image src={icon} alt={title} />}
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            whileInView={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 sm:gap-5 flex-wrap"
          >
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                {tool && (
                  <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
                )}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;

