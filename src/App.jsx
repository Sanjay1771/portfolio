import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';

export default function App() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false);

  const openCommandMenu = useCallback(() => setCommandMenuOpen(true), []);
  const closeCommandMenu = useCallback(() => setCommandMenuOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setCommandMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-bg text-gray-200 overflow-x-hidden">
      <Navbar onCommandMenu={openCommandMenu} />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Testimonials />
        <Stats />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CommandMenu isOpen={commandMenuOpen} onClose={closeCommandMenu} />
    </div>
  );
}
