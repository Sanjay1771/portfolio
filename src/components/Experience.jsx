import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional internships and real-world experience
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative overflow-hidden">
          {/* HORIZONTAL GLOW LINE */}
          <motion.div 
            className="hidden md:block absolute left-12 right-12 top-1/2 -translate-y-1/2 z-0 pointer-events-none"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="h-[3px] w-full bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
          </motion.div>

          {/* CARDS GRID */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto">
            
            {/* CARD 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_35px_100px_rgba(139,92,246,0.4)] hover:border-[#8B5CF6]/50 transition-all duration-500"
            >
              {/* GLOW DOT */}
              <div className="absolute -top-6 left-8 w-6 h-6 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.8)] group-hover:scale-110 transition-transform" />
              
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-gradient-to-r from-[#8B5CF6]/20 to-[#06B6D4]/20 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] rounded-full" />
                <span className="text-sm font-medium text-[#8B5CF6]">2024 -  15-Day Internship</span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                Frontend Development Intern
              </h3>
              
              {/* COMPANY */}
              <p className="text-gray-400 mb-4 font-medium">One Data Software Solutions, Coimbatore</p>
              
              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Built responsive React UIs and gained production frontend experience.
              </p>
              
              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#8B5CF6] border border-white/20">React</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#8B5CF6] border border-white/20">JavaScript</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#8B5CF6] border border-white/20">Responsive Design</span>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-[0_35px_100px_rgba(6,182,212,0.4)] hover:border-[#06B6D4]/50 transition-all duration-500"
            >
              {/* GLOW DOT */}
              <div className="absolute -top-6 right-8 w-6 h-6 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] group-hover:scale-110 transition-transform" />
              
              {/* BADGE */}
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-gradient-to-r from-[#06B6D4]/20 to-[#F59E0B]/20 rounded-full border border-white/20">
                <span className="w-2 h-2 bg-gradient-to-r from-[#06B6D4] to-[#F59E0B] rounded-full" />
                <span className="text-sm font-medium text-[#06B6D4]">Current -  4+ Months</span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#06B6D4] transition-colors">
                Product Support Intern
              </h3>
              
              {/* COMPANY */}
              <p className="text-gray-400 mb-4 font-medium">Cartrabbit</p>
              
              {/* DESCRIPTION */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                Debugged production issues and resolved 100+ customer queries.
              </p>
              
              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#06B6D4] border border-white/20">Debugging</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#06B6D4] border border-white/20">Customer Support</span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-[#06B6D4] border border-white/20">Team Coordination</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
