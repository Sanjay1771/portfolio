import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiExternalLink, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import projects from '../data/projects';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Calculate visible items based on screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, projects.length - visibleCount);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Auto-play interval
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isHovered]);

  // Framer Motion variants for stagger reveal
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="section-padding relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-violet-primary/10 rounded-full blur-[100px] sm:blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-accent/10 rounded-full blur-[100px] sm:blur-[150px]" />
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="Showcasing web, mobile & AI skills built for real clients" />

        <motion.div 
          variants={sectionVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: '-100px' }}
          className="relative mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <div className="absolute top-1/2 left-0 md:-left-8 -translate-y-1/2 z-20">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-violet-primary hover:border-violet-primary transition-all duration-300 shadow-xl"
              aria-label="Previous projects"
            >
              <HiChevronLeft className="text-xl md:text-2xl" />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 md:-right-8 -translate-y-1/2 z-20">
            <button 
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-dark-surface/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-cyan-accent hover:border-cyan-accent transition-all duration-300 shadow-xl"
              aria-label="Next projects"
            >
              <HiChevronRight className="text-xl md:text-2xl" />
            </button>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden px-4 py-12 -mx-4 -my-12">
            <motion.div 
              className="flex gap-6"
              animate={{ x: `calc(-${currentIndex * (100 / visibleCount)}% - ${currentIndex * (24 / visibleCount)}px)` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ right: 0, left: -((projects.length - visibleCount) * 400) }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.x < -50) nextSlide();
                else if (offset.x > 50) prevSlide();
              }}
            >
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.id} 
                  variants={cardVariants}
                  className="relative group min-w-full lg:min-w-[calc(33.333%-16px)] h-[400px] rounded-2xl overflow-hidden glass-card !p-0 border border-white/5 shadow-lg"
                >
                  {/* Base Image */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  
                  {/* Default Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/40 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                  
                  {/* Title when NOT hovered */}
                  <div className="absolute bottom-6 left-6 right-6 transition-all duration-500 group-hover:translate-y-10 group-hover:opacity-0">
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-gray-300 backdrop-blur-sm">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* PREMIUM EXPAND OVERLAY (Shown on Hover) */}
                  <motion.div 
                    className="absolute inset-0 bg-dark-surface/95 backdrop-blur-sm p-8 flex flex-col justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  >
                    <h3 className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-cyan-accent mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-primary to-cyan-accent text-white text-sm font-bold hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all transform hover:-translate-y-1">
                          <HiExternalLink size={18} /> Live Demo
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 flex-1 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white/20 transition-all transform hover:-translate-y-1">
                        <FaGithub size={18} /> Source
                      </a>
                    </div>
                  </motion.div>

                  {/* Top Badges */}
                  {project.featured && (
                    <span className="absolute top-4 right-4 px-4 py-1.5 text-xs font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-violet-primary to-fuchsia-500 text-white shadow-lg z-10">
                      Featured
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? 'w-8 bg-gradient-to-r from-violet-primary to-cyan-accent shadow-[0_0_10px_rgba(139,92,246,0.5)]' 
                    : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
