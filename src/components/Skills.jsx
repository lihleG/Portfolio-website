import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Palette, Users } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Strategic & Technical',
      icon: <ClipboardCheck className="w-8 h-8 text-primary-600 mb-4" />,
      items: [
        { name: 'Digital Project Management', level: 95 },
        { name: 'Content Strategy & Planning', level: 90 },
        { name: 'Digital Marketing & Campaigns', level: 88 },
      ],
    },
    {
      category: 'Creative & Visual',
      icon: <Palette className="w-8 h-8 text-secondary-600 mb-4" />,
      items: [
        { name: 'Visual Storytelling', level: 90 },
        { name: 'Canva Design & Brand Kits', level: 95 },
        { name: 'Creative Direction', level: 92 },
      ],
    },
    {
      category: 'Communication & Leadership',
      icon: <Users className="w-8 h-8 text-accent-600 mb-4" />,
      items: [
        { name: 'Team Coordination', level: 93 },
        { name: 'Event & Campaign Management', level: 85 },
        { name: 'Client Relations', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 section-gradient-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 font-display gradient-text">
            Skills & Expertise
          </h2>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-neutral-200 text-center card-hover"
              >
                <div className="flex flex-col items-center mb-4">
                  {group.icon}
                  <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                    {group.category}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4"></div>
                </div>

                <div className="space-y-4">
                  {group.items.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-neutral-700">
                          {skill.name}
                        </span>
                        <span className="text-primary-600 font-semibold text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-primary-100 rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-neutral-700 italic max-w-3xl mx-auto">
              “Great projects are built through collaboration, creativity, and consistency — 
              values I carry into every digital experience I create.”
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
