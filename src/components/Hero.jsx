import { useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { SiReact, SiFlutter, SiPython, SiJavascript } from 'react-icons/si';
import { FaReact, FaAws, FaNodeJs, FaGithub, FaPython } from 'react-icons/fa';
import { HiDownload, HiMail, HiArrowDown } from 'react-icons/hi';
import profileImg from '../assets/profile.png';

// ----- Tech Icons Data -----
const techIcons = [
  {
    Icon: FaReact,
    style: { top: '5%', left: '60%' },
    animate: {
      x: [0, 10, -8, 8, 0],
      y: [-4, 4, 8, -2, 0],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: SiFlutter,
    style: { top: '30%', left: '80%', zIndex: 20 },
    animate: {
      x: [-8, 8, 10, -6, 0],
      y: [4, -4, 2, 6, 0],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: FaPython,
    style: { top: '72%', left: '80%', zIndex: 20 },
    animate: {
      x: [2, -2, 4, -2, 2],
      y: [-8, 8, -6, 6, -8],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: FaAws,
    style: { top: '80%', left: '50%', zIndex: 20 },
    animate: {
      x: [0, 3, -3, 2, 0],
      y: [0, -4, 4, -2, 0],
      scale: [0.98, 1.02, 0.98],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: SiJavascript,
    style: { top: '70%', left: '12%', zIndex: 20 },
    animate: {
      x: [0, 10, 0, -10, 0],
      y: [-2, 2, -2, 2, -2],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: FaNodeJs,
    style: { top: '35%', left: '6%', zIndex: 20 },
    animate: {
      x: [6, -6, 4, -4, 6],
      y: [-6, 6, -4, 4, -6],
    },
    className: 'w-14 h-14 text-3xl',
  },
  {
    Icon: FaGithub,
    style: { top: '7%', left: '18%', zIndex: 20 },
    animate: {
      x: [0, 0, 4, -4, 0],
      y: [0, -8, 0, 8, 0],
    },
    className: 'w-14 h-14 text-3xl',
  },
];
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  const scrollToProjects = useCallback(() => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-20 pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-bg" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-accent/15 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-primary/5 rounded-full blur-[200px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Animation Container (Compact Safe Zone) */}
        <div className="relative mx-auto mb-8 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center -mt-4 sm:-mt-8">

          {/* Shuffling Tech Icons (Micro-Float) */}
          {techIcons.map(({ Icon, style, animate }, i) => (
            <motion.div
              key={i}
              className="absolute z-20 w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] flex items-center justify-center rounded-xl bg-white/15 backdrop-blur-xl border border-white/25 shadow-xl group transition-all duration-300"
              style={{ ...style, transform: 'translate(-50%, -50%)' }} // Ensure center-based positioning
              animate={animate}
              transition={{ duration: 9 + (i % 2), repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            >
              <Icon className="text-xl sm:text-2xl text-cyan-300 drop-shadow-md group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-300" />
            </motion.div>
          ))}

          {/* PROFILE - CIRCULAR GLOW (LARGER) */}
          <motion.div
                className="absolute w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden bg-gradient-to-br from-violet-500/40 to-cyan-500/40 backdrop-blur-3xl border-[6px] border-white/60 shadow-2xl ring-12 ring-violet-500/50 ring-offset-12 ring-offset-black/70 z-10"
            style={{ boxShadow: '0 0 50px rgba(139,92,246,0.5)' }}
          >
            <img
              src={profileImg}
              className="w-full h-full object-cover rounded-full brightness-110 contrast-110"
              alt="Sanjay K"
            />
          </motion.div>
        </div>



        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Sanjay K</span>
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 h-8 sm:h-10"
        >
          <ReactTyped
            strings={[
              'Full Stack Developer',
              'Flutter Developer',
              'Freelancer',
              'UI/UX Enthusiast',
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={2000}
            loop
            className="font-medium"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable web, mobile & AI apps with modern tech.
          <br className="hidden sm:block" />
          From Tamil Nadu, India 🇮🇳
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="mailto:sanjayk.codes@gmail.com" className="btn-primary text-base">
            <HiMail className="relative z-10 text-lg" />
            <span>Hire Me</span>
          </a>
          <button onClick={scrollToProjects} className="btn-secondary text-base cursor-pointer">
            <span>View Projects</span>
            <HiArrowDown className="text-lg" />
          </button>
          <a 
            href="/resume.pdf"
            download="Sanjay-K-Resume.pdf"
            className="btn-secondary flex items-center gap-2 text-base group w-full sm:w-auto justify-center"
          >
            <HiDownload className="text-lg group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-violet-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
