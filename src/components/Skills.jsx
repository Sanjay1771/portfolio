import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import skills from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative scroll-mt-20 overflow-hidden w-full">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-violet-primary/10 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-accent/10 rounded-full blur-[80px] sm:blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((category) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon size={22} style={{ color: category.color }} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 
                               border border-white/5 hover:border-white/15 transition-colors cursor-default"
                  >
                    <skill.icon size={16} style={{ color: skill.color }} />
                    <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
