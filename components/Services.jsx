import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react";
import Link from 'next/link';

const Services = () => {
  return (
    <motion.div
      id="services"
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
        What I offer
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        My services
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        I specialize in building responsive, user-friendly web applications using HTML, CSS, JavaScript, React, Next.js, Node.js, and Python. With a background in both frontend development and cybersecurity, I deliver secure, high-performance digital experiences with clean, maintainable code.
      </motion.p>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            whileInView={{ scale: 1.05 }}
            viewport={{ once: true }}
            className="border border-gray-300 rounded-xl px-8 py-12 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer bg-white hover:bg-gray-50"
          >
            <Image src={icon} alt={`${title} icon`} className="w-10" />
            <h3 className="text-lg my-4 text-gray-800 font-semibold">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

            <Link
              href="/services"
              className="flex items-center gap-2 text-sm mt-5 text-gray-600 hover:underline"
            >
              Read more <Image src={assets.right_arrow} alt="Arrow icon" className="w-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;

