import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* Blurred Gradient Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-pink-100 via-white to-blue-100 blur-3xl -z-10 top-0 left-1/2 -translate-x-1/2"
        animate={{
        scale: [1, 1.1, 1],
        opacity: [0.4, 0.6, 0.4]
      }}
        transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      />

      
      {/* Hero Content */}
      <div className="w-11/12 max-w-3xl text-center mx-auto flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <Image src={assets.profile_img} alt="Profile picture" className="rounded-full w-32" />
        </motion.div>

        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        >
          Hi, I'm Tracey. <Image src={assets.hand_icon} alt="Waving hand icon" className="w-6" />
        </motion.h3>

        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl sm:text-4xl lg:text-[56px] max-w-4xl leading-tight mx-auto font-Ovo"
        >
          I craft beautiful, secure, and accessible web applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-2xl mx-auto font-Ovo"
        >
          Frontend Developer with a passion for modern UI, React + Tailwind CSS, and secure coding practices — blending clean design with functional code.
        </motion.p>

        {/* Commented out Featured Project for now */}
        {/*
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-6 text-sm text-gray-500"
        >
          ⚡ Recently built: <a href="https://your-bug-tracker-demo.netlify.app" target="_blank" className="underline hover:text-black transition">Bug Tracker Dashboard</a> — modern, responsive, and secure.
        </motion.div>
        */}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#contact"
            className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          >
            contact me <Image src={assets.right_arrow} alt="Arrow icon" className="w-4" />
          </motion.a>

          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="/TraceyBuentelloResume.pdf"
            download
            className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          >
            my resume <Image src={assets.download_icon} alt="Download icon" className="w-4" />
          </motion.a>
        </div>
      </div>
    </div>
  )
}

export default Header
