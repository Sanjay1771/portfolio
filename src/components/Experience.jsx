import { motion } from 'framer-motion';

const Experience = () => (
  <section id="experience" className="py-20 bg-gradient-to-b from-slate-950/50 via-black to-slate-950/50 overflow-hidden scroll-mt-20">
    <div className="container mx-auto px-6 max-w-6xl">
      
      {/* HEADER - COMPACT */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] bg-clip-text text-transparent mb-4 leading-tight">
          Experience
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-display">
          Professional internships and real-world experience building production applications
        </p>
      </motion.div>

      {/* MASTER TIMELINE - COMPACT */}
      <div className="relative">
        {/* HORIZONTAL GLOW LINE - THINNER */}
        <motion.div 
          className="hidden lg:block absolute inset-x-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ height: '1.5px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        </motion.div>

        {/* PRECISION CARDS GRID - COMPACT GAP */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 max-w-5xl mx-auto">
          
          {/* INTERN 1 - COMPACT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-5 lg:p-6 shadow-2xl hover:shadow-[0_25px_80px_rgba(139,92,246,0.2)] hover:border-[#8B5CF6]/40 transition-all duration-700 max-w-[420px] mx-auto lg:mx-0"
          >
            {/* POSITIONED GLOW DOT - SMALLER */}
            <motion.div 
              className="absolute -top-4 left-8 w-3.5 h-3.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* COMPACT STATUS BADGE */}
            <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/20 rounded-xl border border-[#8B5CF6]/30 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-md animate-pulse" />
              <span className="text-xs font-semibold text-[#8B5CF6] tracking-wide">2024 - 15-Day Sprint</span>
            </div>

            {/* CONTENT - SMALLER TEXT */}
            <h3 className="text-lg lg:text-xl font-black text-white mb-2 group-hover:text-[#8B5CF6] transition-colors duration-300 leading-tight font-display">
              Frontend Development Intern
            </h3>
            <p className="text-gray-300 mb-3 font-semibold text-base lg:text-lg">One Data Software Solutions</p>
            <p className="text-gray-400 mb-5 leading-6 text-sm lg:text-base max-w-md font-sans">
              Architected responsive React UIs for production, optimized performance, and collaborated on client deliverables
            </p>
            
            {/* TECH STACK - PILLS SMALLER */}
            <div className="flex flex-wrap gap-2">
              {['React', 'JS', 'Tailwind', 'Responsive'].map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-[10px] font-medium text-[#8B5CF6] rounded-lg border border-white/20 transition-all group-hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* INTERN 2 - COMPACT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-5 lg:p-6 shadow-2xl hover:shadow-[0_25px_80px_rgba(6,182,212,0.2)] hover:border-[#06B6D4]/40 transition-all duration-700 max-w-[420px] mx-auto lg:mx-0"
          >
            {/* GLOW DOT - SMALLER */}
            <motion.div 
              className="absolute -top-4 right-8 w-3.5 h-3.5 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-1.5 mb-4 px-3 py-1 bg-gradient-to-r from-[#06B6D4]/20 to-[#F59E0B]/20 rounded-xl border border-[#06B6D4]/30 backdrop-blur-sm">
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full shadow-md animate-pulse" />
              <span className="text-xs font-semibold text-[#06B6D4] tracking-wide">Active - 4+ Months</span>
            </div>

            <h3 className="text-lg lg:text-xl font-black text-white mb-2 group-hover:text-[#06B6D4] transition-colors duration-300 leading-tight font-display">
              Product Support Intern
            </h3>
            <p className="text-gray-300 mb-3 font-semibold text-base lg:text-lg">Cartrabbit</p>
            <p className="text-gray-400 mb-5 leading-6 text-sm lg:text-base max-w-md font-sans">
              Debugged production issues, resolved 100+ customer queries, and improved support workflow efficiency
            </p>
            
            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2">
              {['Debugging', 'Support', 'Coordination'].map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-[10px] font-medium text-[#06B6D4] rounded-lg border border-white/20 transition-all group-hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
