import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar({ onCommandMenu }) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" }
  ];

  const updateActiveSection = useCallback((id) => setActiveSection(id), []);

  const handleNavClick = (id) => {
    updateActiveSection(id);
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
      window.history.pushState(null, '', `#${id}`);
    }, 100);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              updateActiveSection(entry.target.id);
            }
          });
        },
        { 
          threshold: 0.3, 
          rootMargin: "-15% 0px -40% 0px" 
        }
      );

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
      });

      return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
      };
    }, 150);

    return () => clearTimeout(timeoutId);
  }, [updateActiveSection]);

  return (
    <>
      <motion.nav 
        layoutScroll 
        className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 z-50 px-6 py-4"
        key="navbar"
      >
        <div className="max-w-[90rem] mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            layoutId="logo"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg group cursor-pointer hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
            onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-sm">
              S
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <div key={item.id} className="relative flex flex-col items-center group">
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="px-3 py-2 text-white/80 hover:text-white z-10 transition-colors"
                >
                  {item.label}
                </button>
                
                {/* UNDERLINE - PERFECTLY CENTERED */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 w-10 h-[3px] rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-400 shadow-lg shadow-violet-500/50"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <button
              onClick={onCommandMenu}
              className="text-gray-400 hover:text-white text-sm px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
              aria-label="Open command menu"
            >
              <span className="text-xs">⌘K</span>
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="btn-primary text-sm !px-5 !py-2"
            >
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white z-50 relative" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 right-0 top-0 bg-dark-surface/95 backdrop-blur-xl border-b border-white/5 p-8 pt-24 pb-12 flex flex-col gap-2 rounded-b-3xl shadow-2xl">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all text-left ${
                    activeSection === item.id
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="mt-6 pt-6 border-t border-white/10">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="btn-primary w-full text-center justify-center"
                >
                  <span>Hire Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
