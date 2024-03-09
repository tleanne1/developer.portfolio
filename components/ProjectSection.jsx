"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white" id="projects">
      <h2 className="text-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Projects
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            AI Photo Generator
          </h3>
          <p className="text-base lg:text-lg mt-2">
            SaaS app with AI features and a payments and credits system using
            Next.js 14, Cloudinary AI, Clerk, and Stripe.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              Next.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TypeScript
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              MongoDB
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Clerk
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Cloudinary
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Stripe
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Shadcn
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <Image src="/images/AIphotogenerator.png" width={400} height={400} />
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/besteats.png" width={400} height={400} />
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            Uber Eats Clone
          </h3>
          <p className="text-base lg:text-lg mt-2">
            React JS website styled completely with Tailwind CSS. Mobile first
            responsive design approach using flexbox and grid layouts. Pulling
            all of the data/images from the data.js file to simulate an API
            response. Filter through data/images using the javascript filter
            array method.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              React.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              JavaScript
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            AI Photo Generator
          </h3>
          <p className="text-base lg:text-lg mt-2">
            SaaS app with AI features and a payments and credits system using
            Next.js 14, Cloudinary AI, Clerk, and Stripe.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              Next.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TypeScript
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              MongoDB
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Clerk
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Cloudinary
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Stripe
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Shadcn
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <Image src="/images/AIphotogenerator.png" width={400} height={400} />
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/besteats.png" width={400} height={400} />
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            Uber Eats Clone
          </h3>
          <p className="text-base lg:text-lg mt-2">
            SaaS app with AI features and a payments and credits system using
            Next.js 14, Cloudinary AI, Clerk, and Stripe.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              Next.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TypeScript
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              MongoDB
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Clerk
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Cloudinary
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Stripe
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Shadcn
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            AI Photo Generator
          </h3>
          <p className="text-base lg:text-lg mt-2">
            SaaS app with AI features and a payments and credits system using
            Next.js 14, Cloudinary AI, Clerk, and Stripe.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              Next.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TypeScript
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              MongoDB
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Clerk
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Cloudinary
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Stripe
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Shadcn
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <Image src="/images/AIphotogenerator.png" width={400} height={400} />
      </div>

      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/besteats.png" width={400} height={400} />
        <div className="mt-4 md:mt-0  mb-1 text-left flex flex-col h-full">
          <h3 className="text-2xl font-semibold text-[#ADB7BE]">
            Uber Eats Clone
          </h3>
          <p className="text-base lg:text-lg mt-2">
            SaaS app with AI features and a payments and credits system using
            Next.js 14, Cloudinary AI, Clerk, and Stripe.
          </p>
          <ul className="flex flex-wrap mt-2">
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              Next.js
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              TypeScript
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.8rem] uppercase tracking-wider rounded-full">
              MongoDB
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Clerk
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Cloudinary
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Stripe
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              Shadcn
            </li>
            <li className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 px-2 py-1 text-[0.7rem] uppercase tracking-wider rounded-full">
              TailwindCSS
            </li>
          </ul>
          <div className="flex p-0 md:p-0 md:flex-row md:space-x-8 mt-0">
            <div className="text-[#ADB7BE] hover:text-white mt-3 pr-3">
              <a
                href="https://imaginify-kp1ynopo6-tleannes-projects.vercel.app/"
                target="_blank"
                className="text-2xl"
              >
                Live
              </a>
            </div>
            <div className="text-[#ADB7BE] hover:text-white mt-3">
              <a
                href="https://github.com/tleanne1/imaginify"
                target="_blank"
                className="text-2xl"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
