import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import services from '../data/services';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Services" subtitle="What I can do for you and your business" />
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card p-7 group cursor-default">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-5`}>
                <div className="w-full h-full rounded-2xl bg-dark-bg/80 flex items-center justify-center group-hover:bg-dark-bg/60 transition-colors">
                  <service.icon className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-violet-light transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
