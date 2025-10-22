import React from "react";
import { motion } from "framer-motion";
import heroImage from "../images/makhosazana-hero.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white pt-20 sm:pt-24 text-neutral-900"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Left: Intro Text */}
          <div className="text-center md:text-left">
            <motion.h1
              id="hero-heading"
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-5 leading-tight text-black"
            >
              Hi, I’m{" "}
              <span className="underline underline-offset-4 decoration-[1.5px] decoration-black">
                Makhosazana Lisa Mthethwa
              </span>
            </motion.h1>

            {/* Responsive Subtitle Line */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg text-neutral-700 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed text-center md:text-left"
            >
              Account & Project Manager{" "}
              <span className="hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Executive Virtual Assistant{" "}
              <span className="hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Systems-Driven Professional
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="border border-black text-black px-8 py-3 rounded-full font-medium tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                BOOK APPOINTMENT
              </a>

              <a
                href="Makhosazana Mthethwa Resume.pdf"
                download="Makhosazana Mthethwa Resume.pdf"
                rel="noopener noreferrer"
                className="border border-neutral-400 text-neutral-600 px-8 py-3 rounded-full font-medium tracking-wide hover:bg-neutral-100 transition-all duration-300"
              >
                DOWNLOAD CV
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-xs sm:text-sm text-neutral-600 text-center md:text-left"
            >
              <span className="mr-1">📍 Johannesburg, South Africa</span>
              <span className="mx-1">•</span>
              <a
                href="mailto:khosmthethwa96@gmail.com"
                className="underline hover:text-black"
              >
                khosmthethwa96@gmail.com
              </a>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm border border-neutral-200 rounded-xl overflow-hidden shadow-md bg-white">
              <img
                src={heroImage}
                alt="Makhosazana Lisa Mthethwa"
                className="w-full h-[380px] sm:h-[450px] object-cover filter grayscale hover:grayscale-0 transition duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-4 h-8 border border-neutral-800 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 bg-neutral-800 mt-1 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


