import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Palette, Users } from "lucide-react";

const Skills = () => {
  const skillGroups = [
    {
      category: "Strategic & Technical",
      icon: <ClipboardCheck className="w-8 h-8 text-black mb-4" />,
      items: [
        { name: "Digital Project Management", level: 95 },
        { name: "Content Strategy & Planning", level: 90 },
        { name: "Digital Marketing & Campaigns", level: 88 },
      ],
    },
    {
      category: "Creative & Visual",
      icon: <Palette className="w-8 h-8 text-black mb-4" />,
      items: [
        { name: "Visual Storytelling", level: 90 },
        { name: "Canva Design & Brand Kits", level: 95 },
        { name: "Creative Direction", level: 92 },
      ],
    },
    {
      category: "Communication & Leadership",
      icon: <Users className="w-8 h-8 text-black mb-4" />,
      items: [
        { name: "Team Coordination", level: 93 },
        { name: "Event & Campaign Management", level: 85 },
        { name: "Client Relations", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-neutral-50 text-neutral-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16 font-display">
            Skills & Expertise
          </h2>

          {/* Skill Groups */}
          <div className="grid md:grid-cols-3 gap-10">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border border-neutral-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center mb-6">
                  {group.icon}
                  <h3 className="text-xl font-semibold mb-2 text-black">
                    {group.category}
                  </h3>
                  <div className="w-12 h-0.5 bg-neutral-800 mb-4"></div>
                </div>

                {group.items.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-5"
                  >
                    <div className="flex justify-between text-sm font-medium text-neutral-700 mb-2">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-neutral-800 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Closing Line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center text-neutral-700 italic max-w-3xl mx-auto"
          >
            “Great projects thrive on structure, collaboration, and creativity — 
            principles I bring to every digital initiative I manage.”
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
