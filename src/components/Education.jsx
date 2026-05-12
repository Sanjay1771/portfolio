import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-slate-950 via-black to-slate-950 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent mb-6">
            Education
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        {/* TIMELINE CONTAINER */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          {/* VERTICAL GLOW LINE */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 z-0 pointer-events-none"
            initial={{ scaleY: 0, originY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="w-full h-full bg-gradient-to-b from-[#8B5CF6] via-[#06B6D4] to-[#F59E0B] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)]" />
          </motion.div>

          {/* EDUCATION CARDS */}
          <div className="relative z-20 space-y-12">
            
            {/* 10TH */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.6 }}
              className="group bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(139,92,246,0.4)] hover:border-purple-400/50 max-w-md mx-auto md:ml-0"
            >
              <div className="absolute -left-6 top-12 w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.8)] group-hover:scale-110" />
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl border-2 border-purple-500/30 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">10th CBSE</h3>
                  <p className="text-gray-400 mb-4 font-medium">Sri Ambal Thulasi Public School</p>
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
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group bg-white/5 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(6,182,212,0.4)] hover:border-cyan-400/50 max-w-md mx-auto md:mr-0"
            >
              <div className="absolute -right-6 top-12 w-5 h-5 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:scale-110" />
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl border-2 border-cyan-500/30 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">12th CBSE</h3>
                  <p className="text-gray-400 mb-4 font-medium">Sri Ambal Thulasi Public School</p>
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
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03, y: -8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group bg-white/5 backdrop-blur-xl border border-amber-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-[0_30px_90px_rgba(245,158,11,0.4)] hover:border-amber-400/50 max-w-lg mx-auto"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-12 w-5 h-5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.8)] group-hover:scale-110" />
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/20 backdrop-blur-sm rounded-2xl border-2 border-amber-500/30 flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-bold text-white mb-2">B.Tech Information Technology</h3>
                  <p className="text-gray-400 mb-4 font-medium">Dr. N.G.P Institute of Technology</p>
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
