import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 font-display gradient-text">About Me</h2>

          <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
            I’m a passionate <span className="font-semibold text-primary-600"> Digital Project Manager </span> 
            and <span className="font-semibold text-secondary-600"> Visual Storyteller </span> 
            with over a decade of experience in the tech and creative industries. 
            With a background in Information Technology, I blend creativity with strategy to 
            deliver digital campaigns, events, and visual experiences that connect brands with people.
          </p>

          <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
            My expertise spans web development, social media management, event production, 
            and team coordination. I’ve led projects for brands like 
            <span className="font-semibold text-primary-600"> City of Joburg</span>, 
            <span className="font-semibold text-primary-600"> SuperSport Schools</span>, 
            and <span className="font-semibold text-primary-600"> MCULO</span> — bringing 
            structure, storytelling, and innovation to every project I manage.
          </p>

          {/* Highlights Bar */}
          <div className="flex flex-wrap justify-center text-sm text-neutral-500 gap-4 mt-6 font-medium">
            <span>🎓 BSc in Information Technology</span>
            <span>💼 10+ Years Experience</span>
            <span>🌍 Projects with City of Joburg, SuperSport Schools & MCULO</span>
          </div>

          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {/* Card 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-xl card-hover bg-white shadow-md border border-neutral-200"
            >
              <Briefcase className="w-10 h-10 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary-700">
                Leadership & Delivery
              </h3>
              <p className="text-neutral-600">
                Managing cross-functional teams, timelines, and creative deliverables with precision 
                and purpose from concept to completion.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-xl card-hover bg-white shadow-md border border-neutral-200"
            >
              <Lightbulb className="w-10 h-10 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-secondary-600">
                Creative Direction
              </h3>
              <p className="text-neutral-600">
                Crafting compelling stories and visuals that capture a brand’s essence, 
                ensuring every message feels intentional and authentic.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="p-6 rounded-xl card-hover bg-white shadow-md border border-neutral-200"
            >
              <Rocket className="w-10 h-10 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-accent-600">
                Strategy & Growth
              </h3>
              <p className="text-neutral-600">
                Developing data-driven strategies that align digital vision with measurable impact 
                and meaningful audience engagement.
              </p>
            </motion.div>
          </div>

          {/* Personal Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-14 bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-2xl shadow-sm"
          >
            <p className="italic text-neutral-700 max-w-3xl mx-auto">
              “I believe every brand has a story — my purpose is to bring that story to life 
              through creativity, collaboration, and strategy.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
