import { motion } from 'framer-motion';
import { HiBadgeCheck } from 'react-icons/hi';
import SectionHeading from './SectionHeading';

const certificationsData = [
  {
    id: 1,
    title: 'Programming in Java',
    issuer: 'NPTEL',
    year: '2023',
    gradient: 'from-violet-primary to-fuchsia-500'
  },
  {
    id: 2,
    title: 'IoT and Web 4.0',
    issuer: 'NPTEL',
    year: '2024',
    gradient: 'from-cyan-accent to-blue-500'
  },
  {
    id: 3,
    title: 'Human Computer Interaction',
    issuer: 'NPTEL',
    year: '2025',
    gradient: 'from-emerald-400 to-teal-500'
  }
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Certifications" subtitle="Professional credentials and specialized training" />
        
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: '-50px' }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {certificationsData.map((cert) => (
            <motion.div 
              key={cert.id} 
              variants={itemVariants} 
              whileHover={{ y: -8, transition: { duration: 0.3 } }} 
              className="glass-card relative overflow-hidden group p-8 flex flex-col items-center text-center"
            >
              <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cert.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.gradient} p-[1px] mb-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <HiBadgeCheck className="text-3xl text-white" />
                </div>
              </div>
              
              <h3 className="font-display text-xl font-bold text-white mb-2">{cert.title}</h3>
              <div className="flex items-center gap-2 text-gray-400 font-medium">
                <span className="text-violet-light">{cert.issuer}</span>
                <span>•</span>
                <span>{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
