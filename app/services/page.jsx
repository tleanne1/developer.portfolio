"use client";
import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const ServicesPage = () => {
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

      <h1 className="text-4xl font-Ovo text-center mb-10">Detailed Services</h1>

      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {serviceData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 rounded-xl px-8 py-12 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image src={icon} alt={title} className="w-10 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ServicesPage;
