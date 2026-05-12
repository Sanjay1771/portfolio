import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] bg-clip-text text-transparent mb-6 leading-tight">
            Education
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-display">
            Academic journey and the foundation of my technical expertise
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative max-w-4xl mx-auto">
          {/* VERTICAL GLOW LINE */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 z-0 pointer-events-none"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.6)]" />
          </motion.div>

          {/* EDUCATION CARDS */}
          <div className="relative z-20 space-y-12">
            
            {/* 10TH */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(139,92,246,0.25)] hover:border-purple-400/50 max-w-md mx-auto md:ml-0"
            >
              <div className="absolute -left-3 md:-left-6 top-12 w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-3xl">📚</span>
                </div>
                <div className="flex-1 text-center sm:text-left pt-2">
                  <h3 className="text-2xl font-black text-white mb-2 font-display">10th CBSE</h3>
                  <p className="text-gray-400 mb-4 font-semibold">Sri Ambal Thulasi Public School</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full border border-purple-500/30">
                    <span className="text-sm font-bold text-purple-400">2020</span>
                    <span className="w-px h-4 bg-white/30" />
                    <span className="text-sm font-bold text-white">74.8%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 12TH */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-cyan-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(6,182,212,0.25)] hover:border-cyan-400/50 max-w-md mx-auto md:mr-0"
            >
              <div className="absolute -right-3 md:-right-6 top-12 w-5 h-5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-3xl">🎓</span>
                </div>
                <div className="flex-1 text-center sm:text-left pt-2">
                  <h3 className="text-2xl font-black text-white mb-2 font-display">12th CBSE</h3>
                  <p className="text-gray-400 mb-4 font-semibold">Sri Ambal Thulasi Public School</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 rounded-full border border-cyan-500/30">
                    <span className="text-sm font-bold text-cyan-400">2022</span>
                    <span className="w-px h-4 bg-white/30" />
                    <span className="text-sm font-bold text-white">74.6%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BTECH */}
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className="group relative bg-white/5 backdrop-blur-3xl border border-amber-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(245,158,11,0.25)] hover:border-amber-400/50 max-w-lg mx-auto"
            >
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-5 h-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 flex-shrink-0 flex items-center justify-center group-hover:rotate-6 transition-transform">
                  <span className="text-3xl">🏛️</span>
                </div>
                <div className="flex-1 text-center sm:text-left pt-2">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 font-display">B.Tech Information Technology</h3>
                  <p className="text-gray-400 mb-4 font-semibold">Dr. N.G.P Institute of Technology</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-full border border-amber-500/30">
                    <span className="text-sm font-bold text-amber-400">2022–2026</span>
                    <span className="w-px h-4 bg-white/30" />
                    <span className="text-sm font-bold text-white">CGPA 8.2</span>
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
