import { motion } from 'framer-motion';
import { HiCode, HiChip, HiBriefcase, HiBadgeCheck } from 'react-icons/hi';
import AnimatedCounter from './AnimatedCounter';

const stats = [
  { icon: HiCode, label: 'Projects', value: 15, suffix: '+' },
  { icon: HiChip, label: 'Technologies', value: 10, suffix: '+' },
  { icon: HiBriefcase, label: 'Internships', value: 2, suffix: '' },
  { icon: HiBadgeCheck, label: 'Certifications', value: 3, suffix: '' },
];

export default function Stats() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="glass-card-strong p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="text-center">
                <stat.icon className="text-3xl text-violet-light mx-auto mb-3" />
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 text-sm mt-2 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
