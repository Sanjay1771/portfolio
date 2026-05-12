import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaTrophy } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech IT',
    score: 'CGPA 8.2',
    institution: 'Dr. N.G.P Institute of Technology',
    period: '2022-2026',
    icon: FaGraduationCap,
    gradient: 'from-amber-400 to-orange-500', // Gold/premium
    widthClass: 'w-full md:w-2/3',
    delay: 0.4
  },
  {
    id: 2,
    degree: '12th CBSE',
    score: '74.6%',
    institution: 'Sri Ambal Thulasi PS',
    period: '2022',
    icon: FaSchool,
    gradient: 'from-cyan-accent to-blue-500',
    widthClass: 'w-full md:w-5/6',
    delay: 0.2
  },
  {
    id: 3,
    degree: '10th CBSE',
    score: '74.8%',
    institution: 'Sri Ambal Thulasi PS',
    period: '2020',
    icon: FaSchool,
    gradient: 'from-violet-primary to-fuchsia-500',
    widthClass: 'w-full',
    delay: 0
  }
];

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading title="Education" subtitle="My academic growth and foundation" />
        
        <div className="relative mt-12 flex flex-col items-center">
          
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 bottom-0 w-1 bg-gray-800 rounded-full z-0">
             <motion.div 
               className="w-full bg-gradient-to-t from-violet-primary via-cyan-accent to-amber-400 rounded-full"
               initial={{ height: 0 }}
               whileInView={{ height: '100%' }}
               viewport={{ once: true, margin: '-50px' }}
               transition={{ duration: 1.5, ease: 'easeOut' }}
             />
          </div>

          <div className="flex flex-col-reverse items-center w-full gap-8 z-10">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: edu.delay, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                className={`${edu.widthClass} glass-card-strong p-6 md:p-8 relative group flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-4 sm:gap-6 border-b-4 border-b-transparent hover:border-b-[url()] transition-all duration-300 shadow-lg`}
                style={{
                  borderBottomColor: edu.gradient.includes('amber') ? '#F59E0B' : edu.gradient.includes('cyan') ? '#06B6D4' : '#8B5CF6'
                }}
              >
                {/* Background Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full">
                   {/* Icon */}
                   <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${edu.gradient} p-[1px] flex-shrink-0 group-hover:rotate-6 transition-transform duration-300`}>
                     <div className="w-full h-full rounded-xl bg-dark-bg flex items-center justify-center">
                       <edu.icon className="text-2xl sm:text-3xl text-white drop-shadow-md" />
                     </div>
                   </div>

                   {/* Content */}
                   <div className="flex-1">
                     <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-violet-light transition-colors">{edu.degree}</h3>
                        <span className="text-xs font-bold tracking-wider text-gray-400 bg-white/5 px-3 py-1 rounded-full">{edu.period}</span>
                     </div>
                     <p className="text-gray-400 font-medium text-sm mb-3">{edu.institution}</p>
                   </div>
                </div>

                {/* Score Badge */}
                <motion.div 
                   className={`px-4 py-2 rounded-xl bg-gradient-to-r ${edu.gradient} shadow-lg flex items-center gap-2 flex-shrink-0`}
                   whileHover={{ scale: 1.1 }}
                >
                  {edu.degree.includes('B.Tech') && <FaTrophy className="text-white text-sm" />}
                  <span className="text-white font-bold whitespace-nowrap">{edu.score}</span>
                </motion.div>

              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
