import { motion } from 'framer-motion';

const Experience = () => (
  <section id="experience" className="py-24 bg-gradient-to-b from-slate-950/50 via-black to-slate-950/50 overflow-hidden scroll-mt-20">
    <div className="container mx-auto px-6 max-w-7xl">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] bg-clip-text text-transparent mb-6 leading-tight">
          Experience
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-display">
          Professional internships and hands-on real-world experience building production applications
        </p>
      </motion.div>

      {/* MASTER TIMELINE */}
      <div className="relative">
        {/* HORIZONTAL GLOW LINE */}
        <motion.div 
          className="hidden lg:block absolute inset-x-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ height: '2px' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
        </motion.div>

        {/* PRECISION CARDS GRID */}
        <div className="relative z-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* INTERN 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-7 lg:p-9 shadow-2xl hover:shadow-[0_35px_120px_rgba(139,92,246,0.25)] hover:border-[#8B5CF6]/40 transition-all duration-700 max-w-[520px] mx-auto lg:mx-0"
          >
            {/* POSITIONED GLOW DOT */}
            <motion.div 
              className="absolute -top-6 left-8 w-5 h-5 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-xl group-hover:scale-125 transition-transform duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* COMPACT STATUS BADGE */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/20 rounded-2xl border border-[#8B5CF6]/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-md animate-pulse" />
              <span className="text-sm font-semibold text-[#8B5CF6] tracking-wide">2024 -  15-Day Sprint</span>
            </div>

            {/* CONTENT */}
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-[#8B5CF6] transition-colors duration-300 leading-tight font-display">
              Frontend Development Intern
            </h3>
            <p className="text-gray-300 mb-4 font-semibold text-lg lg:text-xl">One Data Software Solutions, Coimbatore</p>
            <p className="text-gray-400 mb-7 leading-7 text-base lg:text-lg max-w-md font-sans">
              Architected responsive React UIs for production, optimized performance, and collaborated on client deliverables
            </p>
            
            {/* TECH STACK - COMPACT */}
            <div className="flex flex-wrap gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Responsive'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-xs font-medium text-[#8B5CF6] rounded-xl border border-white/20 transition-all group-hover:scale-105">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* INTERN 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="group relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-7 lg:p-9 shadow-2xl hover:shadow-[0_35px_120px_rgba(6,182,212,0.25)] hover:border-[#06B6D4]/40 transition-all duration-700 max-w-[520px] mx-auto lg:mx-0"
          >
            {/* GLOW DOT */}
            <motion.div 
              className="absolute -top-6 right-8 w-5 h-5 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full shadow-xl group-hover:scale-125 transition-transform duration-300"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* STATUS BADGE */}
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-2 bg-gradient-to-r from-[#06B6D4]/20 to-[#F59E0B]/20 rounded-2xl border border-[#06B6D4]/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full shadow-md animate-pulse" />
              <span className="text-sm font-semibold text-[#06B6D4] tracking-wide">Active -  4+ Months</span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 group-hover:text-[#06B6D4] transition-colors duration-300 leading-tight font-display">
              Product Support Intern
            </h3>
            <p className="text-gray-300 mb-4 font-semibold text-lg lg:text-xl">Cartrabbit</p>
            <p className="text-gray-400 mb-7 leading-7 text-base lg:text-lg max-w-md font-sans">
              Debugged production issues, resolved 100+ customer queries, and improved support workflow efficiency
            </p>
            
            {/* TECH STACK - COMPACT */}
            <div className="flex flex-wrap gap-2">
              {['Debugging', 'Customer Support', 'Teamwork', 'Coordination'].map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-xs font-medium text-[#06B6D4] rounded-xl border border-white/20 transition-all group-hover:scale-105">
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
