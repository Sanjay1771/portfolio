import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaBug, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 1,
    role: 'Frontend Intern',
    year: '2024',
    company: 'One Data Software',
    icon: FaReact,
    description: '15-day React UI production',
    gradient: 'from-[#06B6D4] to-[#3B82F6]'
  },
  {
    id: 2,
    role: 'Product Support Intern',
    year: 'Current',
    company: 'Cartrabbit',
    icon: FaBug,
    description: '4+ months, 100+ queries fixed',
    gradient: 'from-[#8B5CF6] to-[#D946EF]'
  }
];

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === experiences.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  // Determine how many items to show
  const visibleExperiences = isMobile ? [experiences[currentIndex]] : experiences;

  return (
    <section id="experience" className="section-padding relative overflow-hidden scroll-mt-20">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading title="Experience" subtitle="My professional internships and work history" />
        
        <div className="relative mt-16 overflow-hidden isolate">
          
          {/* Timeline Bar (Desktop: Horizontal, Mobile: slightly adapted or hidden if we use carousel dots instead, but user wants full-width line) */}
          {/* LINE BEHIND - DESKTOP ONLY */}
          <div className="hidden md:block absolute inset-x-0 top-1/2 -translate-y-1/2 z-[-1] pointer-events-none">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-md" />
          </div>

          {/* Navigation Arrows */}
          {isMobile && (
             <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center -translate-y-1/2 z-20 pointer-events-none px-2">
               <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-all shadow-lg hover:shadow-violet-500/20 active:scale-95" aria-label="Previous">
                  <FaChevronLeft size={16} />
               </button>
               <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-all shadow-lg hover:shadow-cyan-500/20 active:scale-95" aria-label="Next">
                  <FaChevronRight size={16} />
               </button>
             </div>
          )}

          {/* CARDS ABOVE */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {visibleExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isMobile ? 50 : 0, y: isMobile ? 0 : 40 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -50 : 0 }}
                  whileInView={!isMobile ? { opacity: 1, y: 0 } : undefined}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: !isMobile ? index * 0.2 : 0 }}
                  className="flex flex-col items-center group relative"
                  drag={isMobile ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = offset.x;
                    if (swipe < -50) nextSlide();
                    else if (swipe > 50) prevSlide();
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="w-6 h-6 rounded-full bg-dark-bg border-4 border-[#8B5CF6] z-10 mb-6 hidden md:block group-hover:scale-125 group-hover:border-[#06B6D4] transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                  
                  {/* Card */}
                  <motion.div 
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card-strong w-full max-w-sm p-8 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  >
                    <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${exp.gradient} opacity-70 group-hover:opacity-100 transition-opacity`} />
                    
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} p-[1px] mb-5 shadow-lg group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-500 group-hover:rotate-12`}>
                      <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                        <exp.icon className="text-3xl text-white drop-shadow-md" />
                      </div>
                    </div>
                    
                    <span className="text-xs font-bold tracking-wider uppercase text-violet-light mb-2 bg-violet-primary/10 px-3 py-1 rounded-full border border-violet-primary/20">{exp.year}</span>
                    <h3 className="font-display text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4 text-sm">{exp.company}</h4>
                    
                    <p className="text-gray-300 text-sm leading-relaxed max-w-[250px] mx-auto bg-white/5 py-2 px-4 rounded-lg border border-white/5">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Mobile dots indicator */}
          {isMobile && (
             <div className="flex justify-center gap-2 mt-8">
               {experiences.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-cyan-accent w-6' : 'bg-white/20'}`} 
                 />
               ))}
             </div>
          )}

        </div>
      </div>
    </section>
  );
}
