import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, CalendarDays } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-700 text-white py-14">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2 font-display">
              Makhosazana Lisa Mthethwa
            </h3>
            <p className="text-primary-100">
              Digital Project Manager & Visual Storyteller
            </p>
          </motion.div>

          {/* Links and Call to Action */}
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
              className="inline-flex items-center text-primary-100 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>

            {/* Calendly Button */}
            <motion.a
              href="https://calendly.com/makhosazana-mthethwa" // Replace with her actual Calendly link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-secondary-600 to-primary-600 text-white px-5 py-2.5 rounded-lg shadow-md hover:opacity-90 transition-opacity font-medium"
            >
              <CalendarDays className="w-5 h-5 mr-2" />
              Book Appointment
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-600 mt-10 pt-8 text-center text-primary-200 text-sm"
        >
          <p>
            © {new Date().getFullYear()} Makhosazana Lisa Mthethwa. All rights
            reserved.
          </p>
          <p className="mt-1">
            Designed & Developed by <span className="text-white font-medium">lihleguma.dev</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
