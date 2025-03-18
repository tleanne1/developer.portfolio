import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}
    id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <motion.h4 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className="text-center mb-2 text-lg font-Ovo">What I offer</motion.h4>
        <motion.h2 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className="text-center text-5xl font-Ovo">My services</motion.h2>

        <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
            Skilled in building responsive, user-friendly web apps with HTML, CSS, JavaScript, React, Next.js, Node.js, and Python. With experience in both development and cybersecurity, I focus on clean code and secure best practices for high-quality digital experiences."
        </motion.p>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className="grid-auto my-10">
            {serviceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                whileInView={{scale: 1.05}}
                key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover-shadow-black cursor-pointer hover-bg-lightHover hover:-translate-y-1 duration-500">
                    <Image src={icon} alt="" className="w-10"/>
                    <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                    <p className="text-sm text-gray-600 leading-5">
                        {description}
                    </p>
                    <a href={link} className="flex items-center gap-2 text-sm mt-5">
                        Read more <Image src={assets.right_arrow} alt="" className="w-4"/></a>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default Services