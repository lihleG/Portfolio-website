import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../images/makhosazana-hero.jpeg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 section-gradient-light"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <motion.h1
              id="hero-heading"
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-display leading-tight"
              whileHover={{ scale: 1.01 }}
            >
              Hi, I'm <span className="gradient-text">Makhosazana Lisa Mthethwa</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg md:text-xl text-neutral-700 mb-6 max-w-xl font-medium"
            >
              Digital Project Manager & Visual Storyteller — bringing creative ideas to life through strategy, design and production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <a
                href="#projects"
                className="inline-block btn-primary"
                aria-label="View Makhosazana's work — jump to projects section"
              >
                View My Work
              </a>

              <a
                href="/assets/Makhosazana_Mthethwa_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-secondary"
                aria-label="Download Makhosazana's CV"
              >
                Download CV
              </a>
            </motion.div>

            {/* quick contact line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-sm text-neutral-600"
            >
              <span className="mr-2">📍 Johannesburg, South Africa</span>
              <span className="mx-2">•</span>
              <a
                href="mailto:khosmthethwa96@gmail.com"
                className="underline hover:text-primary-500"
                aria-label="Email Makhosazana"
              >
                khosmthethwa96@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait / Visual card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm bg-white/80 backdrop-blur-md border border-neutral-200 rounded-2xl shadow-xl p-4">
              {/* portrait */}
              <div className="rounded-xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Makhosazana Lisa Mthethwa — Digital Project Manager and Visual Storyteller"
                  className="w-full h-72 object-cover block"
                  loading="lazy"
                />
              </div>

              {/* name + role */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-neutral-800">Makhosazana Lisa Mthethwa</h3>
                <p className="text-sm text-neutral-600 mt-1">Digital Project Manager & Visual Storyteller</p>
              </div>

              {/* small skill chips */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">Canva</span>
                <span className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">Digital Strategy</span>
                <span className="px-3 py-1 text-xs bg-primary-100 text-primary-700 rounded-full">Event Mgmt</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator — keep but slightly smaller for clarity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-9 border-2 border-primary-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;