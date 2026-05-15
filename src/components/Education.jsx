import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-950 via-black to-slate-950 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* HEADER - COMPACT */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] bg-clip-text text-transparent mb-4 leading-tight">
            Education
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-display">
            Academic journey and the foundation of my technical expertise
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER - COMPACT */}
        <div className="relative max-w-3xl mx-auto">
          {/* VERTICAL GLOW LINE - THINNER */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1.5px] -translate-x-1/2 z-0 pointer-events-none"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
          </motion.div>

          {/* EDUCATION CARDS - COMPACT */}
          <div className="relative z-20 space-y-10">
            
            {/* 10TH */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-purple-500/30 rounded-3xl p-5 shadow-2xl hover:shadow-[0_25px_80px_rgba(139,92,246,0.2)] hover:border-purple-400/50 max-w-[28rem] mx-auto md:ml-0"
            >
              <div className="absolute left-4 md:-left-5 top-10 w-3.5 h-3.5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(139,92,246,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex items-center sm:items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="flex-1 text-left pt-1">
                  <h3 className="text-lg font-black text-white mb-1 font-display">10th CBSE</h3>
                  <p className="text-gray-400 mb-3 text-sm font-semibold">Sri Ambal Thulasi Public School</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full border border-purple-500/30">
                    <span className="text-xs font-bold text-purple-400">2020</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="text-xs font-bold text-white">74.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 12TH */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-cyan-500/30 rounded-3xl p-5 shadow-2xl hover:shadow-[0_25px_80px_rgba(6,182,212,0.2)] hover:border-cyan-400/50 max-w-[28rem] mx-auto md:mr-0"
            >
              <div className="absolute right-4 md:-right-5 top-10 w-3.5 h-3.5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex items-center sm:items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1 text-left pt-1">
                  <h3 className="text-lg font-black text-white mb-1 font-display">12th CBSE</h3>
                  <p className="text-gray-400 mb-3 text-sm font-semibold">Sri Ambal Thulasi Public School</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-full border border-cyan-500/30">
                    <span className="text-xs font-bold text-cyan-400">2022</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="text-xs font-bold text-white">74.6%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BTECH */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-amber-500/30 rounded-3xl p-5 shadow-2xl hover:shadow-[0_25px_80px_rgba(245,158,11,0.2)] hover:border-amber-400/50 max-w-[28rem] mx-auto"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-3.5 h-3.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex items-center sm:items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div className="flex-1 text-left pt-1">
                  <h3 className="text-lg font-black text-white mb-1 font-display leading-tight">B.Tech Information Technology</h3>
                  <p className="text-gray-400 mb-3 text-sm font-semibold">Dr. N.G.P Institute of Technology</p>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full border border-amber-500/30">
                    <span className="text-xs font-bold text-amber-400">2022–2026</span>
                    <span className="w-px h-3 bg-white/30" />
                    <span className="text-xs font-bold text-white">CGPA 8.2</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
