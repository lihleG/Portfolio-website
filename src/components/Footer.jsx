import React from "react";
import { motion } from "framer-motion";
import { Linkedin, CalendarDays } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-neutral-200 py-16">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2 text-white font-display">
              Makhosazana Lisa Mthethwa
            </h3>
            <p className="text-neutral-400 text-sm md:text-base leading-tight text-center md:text-left">
              Account & Project Manager{" "}
              <span className="hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Executive Virtual Assistant{" "}
              <span className="hidden sm:inline">|</span>
              <br className="sm:hidden" />
              Systems-Driven Professional
            </p>
          </motion.div>

          {/* Social & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:items-end text-center md:text-right gap-4"
          >
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/makhosazana-lisa-m-b6abb1133/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>

            {/* Calendly Button */}
            <motion.a
              href="https://calendly.com/makhosazana-mthethwa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center border border-white text-white px-5 py-2.5 rounded-lg hover:bg-white hover:text-black transition-all duration-200 font-medium"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              BOOK APPOINTMENT
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-800 mt-10 pt-8 text-center text-sm text-neutral-500"
        >
          <p>
            © {new Date().getFullYear()} Makhosazana Lisa Mthethwa. All rights
            reserved.
          </p>
          <p className="mt-1">
            Designed & Developed by{" "}
            <span className="text-white font-medium">lihleguma.dev</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



