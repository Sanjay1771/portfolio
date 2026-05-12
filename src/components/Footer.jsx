import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaHeart } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ScrollToTop from './ScrollToTop';

const socials = [
  { icon: FaGithub, url: 'https://github.com/Sanjay1771', label: 'GitHub' },
  { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/sanjay-k-160068258', label: 'LinkedIn' },
  { icon: HiMail, url: 'mailto:sanjayk.codes@gmail.com', label: 'Email' },
  { icon: FaWhatsapp, url: 'https://wa.me/916374261771', label: 'WhatsApp' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#hero" className="font-display text-2xl font-bold gradient-text">
            SK<span className="text-violet-primary">.</span>
          </a>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet-primary/30 transition-all" aria-label={s.label}>
                <s.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {new Date().getFullYear()} Sanjay K. Made with
            <FaHeart className="text-violet-primary text-xs" />
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
