import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Lightbulb, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white text-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-10 border-b border-neutral-300 inline-block pb-2">
            About Me
          </h2>

          {/* Intro Paragraphs */}
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            I’m <span className="font-semibold text-black">Makhosazana Lisa Mthethwa</span>, 
            a Digital Project Manager and Visual Storyteller passionate about 
            creating work that blends structure, creativity, and human connection. 
            My experience bridges the worlds of digital strategy, event production, 
            and creative direction — ensuring every project is purposeful and visually cohesive.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-8">
            Over the years, I’ve collaborated with brands such as 
            <span className="font-medium text-black"> City of Joburg</span>,{" "}
            <span className="font-medium text-black">SuperSport Schools</span>, and{" "}
            <span className="font-medium text-black">MCULO</span>, 
            helping them craft meaningful campaigns and experiences that connect with people.
          </p>

          {/* Quick Facts */}
          <div className="flex flex-wrap justify-center text-sm text-neutral-500 gap-4 mt-6 font-medium">
            <span>🎓 BSc in Information Technology</span>
            <span>💼 10+ Years of Experience</span>
            <span>🌍 Collaborated with National & Lifestyle Brands</span>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl text-left transition-all duration-300"
            >
              <Briefcase className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black">
                Project Leadership
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Managing creative teams, timelines, and deliverables with precision — 
                ensuring every phase from concept to launch is seamlessly executed.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl text-left transition-all duration-300"
            >
              <Lightbulb className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black">
                Creative Direction
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Guiding brands in visual storytelling and digital identity — 
                where creativity meets intention and every detail supports the bigger picture.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl text-left transition-all duration-300"
            >
              <Target className="w-10 h-10 text-black mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-black">
                Strategy & Insight
              </h3>
              <p className="text-neutral-700 text-sm leading-relaxed">
                Aligning business goals with digital execution — building campaigns 
                and projects that are both visually compelling and strategically grounded.
              </p>
            </motion.div>
          </div>

          {/* Personal Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 border-t border-neutral-200 pt-10 max-w-3xl mx-auto"
          >
            <p className="italic text-neutral-700 text-lg leading-relaxed">
              “Every brand has a voice — my role is to help it speak with clarity, creativity, 
              and confidence in the digital world.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
