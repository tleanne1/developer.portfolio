'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

const tabs = [
  'Frontend Development',
  'Secure Web Development',
  'UI/UX Design Collaboration',
  'API Integration',
  'Performance Optimization',
  'Tech Consulting & Audits'
];

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeContent = serviceData.find((service) => service.title === activeTab);

  return (
    <motion.div
      className="min-h-screen w-full px-4 sm:px-8 md:px-[12%] py-16 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Back to Home */}
      <Link
        href="/"
        className="text-sm text-gray-600 underline hover:text-black transition mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Page Headings */}
      <motion.h2
        className="text-5xl font-Ovo mb-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Services I Offer
      </motion.h2>

      <motion.p
        className="max-w-2xl mb-10 text-gray-700"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Here’s a closer look at how I help brands and businesses through thoughtful, secure, and user-friendly development.
        Whether you’re starting from scratch or improving an existing product — I’m here to collaborate and code with purpose.
      </motion.p>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-3 mb-10">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
              tab === activeTab
                ? 'bg-black text-white border-black'
                : 'border-gray-300 text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeContent && (
        <motion.div
          key={activeContent.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-md border border-gray-200 max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <Image src={activeContent.icon} alt={activeContent.title} className="w-10" />
            <h3 className="text-xl font-semibold text-gray-800">{activeContent.title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">{activeContent.description}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ServicesPage;
