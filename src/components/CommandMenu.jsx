import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiUser, HiCode, HiCollection, HiMail, HiAcademicCap, HiBriefcase, HiX } from 'react-icons/hi';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const commands = [
  { id: 'about', label: 'About Me', icon: HiUser, action: '#about' },
  { id: 'skills', label: 'Skills & Technologies', icon: HiCode, action: '#skills' },
  { id: 'services', label: 'Services', icon: HiBriefcase, action: '#services' },
  { id: 'projects', label: 'Projects', icon: HiCollection, action: '#projects' },
  { id: 'education', label: 'Education', icon: HiAcademicCap, action: '#education' },
  { id: 'contact', label: 'Contact Me', icon: HiMail, action: '#contact' },
  { id: 'github', label: 'GitHub Profile', icon: FaGithub, action: 'https://github.com/Sanjay1771', external: true },
  { id: 'linkedin', label: 'LinkedIn Profile', icon: FaLinkedinIn, action: 'https://linkedin.com/in/sanjayk', external: true },
  { id: 'resume', label: 'Download Resume', icon: HiCode, action: '/resume.pdf', external: true },
];

export default function CommandMenu({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  const runCommand = useCallback((cmd) => {
    onClose();
    setQuery('');
    if (cmd.external) {
      window.open(cmd.action, '_blank');
    } else {
      document.querySelector(cmd.action)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onClose]);

  useEffect(() => { setSelected(0); }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setSelected((s) => Math.min(s + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
      if (e.key === 'Enter' && filtered[selected]) { runCommand(filtered[selected]); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, filtered, selected, runCommand]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]" onClick={onClose}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.95, y: -20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: -20 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()} className="relative w-full max-w-lg mx-4 glass-card-strong overflow-hidden !rounded-2xl" role="dialog" aria-label="Command menu">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
              <HiSearch className="text-gray-400 text-xl flex-shrink-0" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Type a command or search..." autoFocus className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none text-base" aria-label="Search commands" />
              <button onClick={onClose} className="text-gray-400 hover:text-white p-1" aria-label="Close command menu"><HiX size={18} /></button>
            </div>
            <div className="max-h-72 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-8">No results found</p>
              ) : (
                filtered.map((cmd, i) => (
                  <button key={cmd.id} onClick={() => runCommand(cmd)} onMouseEnter={() => setSelected(i)} className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${i === selected ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                    <cmd.icon size={18} className={i === selected ? 'text-violet-light' : ''} />
                    <span className="text-sm font-medium">{cmd.label}</span>
                    {cmd.external && <span className="ml-auto text-xs text-gray-500">↗</span>}
                  </button>
                ))
              )}
            </div>
            <div className="px-5 py-3 border-t border-white/5 flex items-center gap-4 text-xs text-gray-500">
              <span>↑↓ Navigate</span><span>↵ Select</span><span>Esc Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
