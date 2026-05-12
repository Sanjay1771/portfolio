import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import { FaQuoteLeft } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import testimonials from '../data/testimonials';

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative scroll-mt-20">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-accent/8 rounded-full blur-[130px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Testimonials" subtitle="What people say about working with me" />
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.3 } }} className="glass-card p-7 relative">
              <FaQuoteLeft className="text-violet-primary/20 text-4xl absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <HiStar key={i} className="text-amber-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-accent-gradient flex items-center justify-center text-white font-bold text-sm">{t.avatar}</div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
