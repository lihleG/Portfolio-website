import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import cityJoburgImage from '../images/City of Joburg.png';
import mculoImage from '../images/mculo-brand.jpeg';
import supersportImage from '../images/supersport.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SuperSport Schools Digital Campaign',
      description:
        'Led a multi-platform campaign for SuperSport Schools, aligning video content, social media strategy, and digital engagement to boost audience reach and brand storytelling.',
      image: supersportImage, 
      tags: ['Digital Strategy', 'Social Media', 'Content Creation'],
      link: '#',
    },
    {
      id: 2,
      title: 'City of Joburg Event Coordination',
      description:
        'Managed logistics, visuals, and event execution for a City of Joburg public engagement event — ensuring a seamless experience from concept to delivery.',
      image: cityJoburgImage,
      tags: ['Event Management', 'Coordination', 'Brand Experience'],
      link: '#',
    },
    {
      id: 3,
      title: 'MCULO Visual Brand Identity',
      description:
        'Developed the brand identity and storytelling visuals for MCULO — bringing a modern, elegant feel to their digital presence through Canva design and narrative structure.',
      image: mculoImage,
      tags: ['Branding', 'Visual Design', 'Canva'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 section-gradient-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-display gradient-text">
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
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-neutral-200 hover:shadow-xl transition-all duration-300 card-hover"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-primary-800">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
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
            className="text-center mt-16 text-neutral-700 max-w-3xl mx-auto leading-relaxed"
          >
            Each project reflects my approach balancing strategy, creativity, and storytelling 
            to help brands connect with people in meaningful ways.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
