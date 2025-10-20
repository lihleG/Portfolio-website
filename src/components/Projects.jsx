import React from "react";
import { motion } from "framer-motion";

import cityJoburgImage from "../images/City of Joburg.png";
import mculoImage from "../images/mculo-brand.jpeg";
import supersportImage from "../images/supersport.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "SuperSport Schools Digital Campaign",
      description:
        "Led a multi-platform campaign for SuperSport Schools, aligning video content, social media strategy, and digital engagement to boost audience reach and brand storytelling.",
      image: supersportImage,
      tags: ["Digital Strategy", "Social Media", "Content Creation"],
      category: "Campaign Strategy",
    },
    {
      id: 2,
      title: "City of Joburg Event Coordination",
      description:
        "Managed logistics, visuals, and event execution for a City of Joburg public engagement event — ensuring a seamless experience from concept to delivery.",
      image: cityJoburgImage,
      tags: ["Event Management", "Coordination", "Brand Experience"],
      category: "Event Management",
    },
    {
      id: 3,
      title: "MCULO Visual Brand Identity",
      description:
        "Developed the brand identity and storytelling visuals for MCULO — bringing a modern, elegant feel to their digital presence through Canva design and narrative structure.",
      image: mculoImage,
      tags: ["Branding", "Visual Design", "Canva"],
      category: "Brand Development",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white text-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 font-display text-black">
            Featured Projects
          </h2>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-black">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-5 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Category Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-black text-black rounded-full text-xs md:text-sm font-medium hover:bg-black hover:text-white transition-all duration-200"
                  >
                    {project.category}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16 text-neutral-700 max-w-3xl mx-auto leading-relaxed text-sm md:text-base"
          >
            Each project reflects a balance of strategy, creativity, and visual
            storytelling — helping brands communicate their stories with clarity
            and impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

