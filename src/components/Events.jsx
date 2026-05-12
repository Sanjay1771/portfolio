import { motion } from 'framer-motion';
import { HiLightningBolt, HiLocationMarker } from 'react-icons/hi';
import SectionHeading from './SectionHeading';

const eventsData = [
  {
    id: 1,
    title: 'Paper Presentation',
    institution: 'Bannari Amman Institute',
    location: 'Sathyamangalam',
    gradient: 'from-violet-primary to-fuchsia-500'
  },
  {
    id: 2,
    title: 'Technical Symposium + Code Debug',
    institution: 'MIT Chennai',
    location: 'Chennai',
    gradient: 'from-cyan-accent to-blue-500'
  },
  {
    id: 3,
    title: 'Technical Symposium',
    institution: 'Sri Ramakrishna Inst.',
    location: 'Coimbatore',
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    id: 4,
    title: 'UI/UX Design Workshop',
    institution: 'Sri Eshwar College',
    location: 'Coimbatore',
    gradient: 'from-orange-500 to-rose-500'
  }
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Events() {
  return (
    <section id="events" className="section-padding relative bg-dark-bg/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Technical Events" subtitle="Workshops, symposiums, and presentations" />
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: '-50px' }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {eventsData.map((event) => (
            <motion.div 
              key={event.id} 
              variants={itemVariants} 
              whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.2 } }} 
              className="glass-card-strong p-6 relative overflow-hidden group flex flex-col h-full"
            >
              <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${event.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div className="flex items-start gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${event.gradient} p-[1px] flex-shrink-0`}>
                  <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center">
                    <HiLightningBolt className="text-xl text-white" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-white leading-tight">{event.title}</h3>
              </div>
              
              <div className="mt-auto space-y-2">
                <p className="text-violet-light font-medium text-sm">{event.institution}</p>
                <p className="text-gray-400 text-sm flex items-center gap-1.5">
                  <HiLocationMarker size={14} className="flex-shrink-0" />
                  {event.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
