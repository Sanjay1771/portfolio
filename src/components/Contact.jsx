import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaWhatsapp, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import socialLinks from '../data/socialLinks';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoUrl = `mailto:sanjayk.codes@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section-padding relative scroll-mt-20">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-primary/8 rounded-full blur-[150px]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Drop me a message!" />
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-primary focus:ring-1 focus:ring-violet-primary outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-primary focus:ring-1 focus:ring-violet-primary outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-primary focus:ring-1 focus:ring-violet-primary outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-violet-primary focus:ring-1 focus:ring-violet-primary outline-none transition-all resize-none" />
              </div>
              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary w-full justify-center text-base !py-3.5 cursor-pointer">
                <HiPaperAirplane className="relative z-10 text-lg rotate-90" />
                <span>{submitted ? '✓ Message Sent!' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-4">
            {/* Phone / WhatsApp */}
            <a href="https://wa.me/916374261771" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 group transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-xl text-green-400" />
              </div>
              <div>
                <p className="text-white font-medium">Phone / WhatsApp</p>
                <p className="text-gray-400 text-sm">+91 6374261771</p>
              </div>
            </a>
            {/* Email */}
            <a href="mailto:sanjayk.codes@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Sanjay,%0AI%20saw%20your%20portfolio..." target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 group transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <HiMail className="text-xl text-red-400" />
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">sanjayk.codes@gmail.com</p>
              </div>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/sanjay-k-160068258" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 group transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                <FaLinkedinIn className="text-xl text-blue-400" />
              </div>
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">Sanjay K</p>
              </div>
            </a>
            {/* GitHub */}
            <a href="https://github.com/Sanjay1771" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 group transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <div className="w-12 h-12 rounded-xl bg-gray-500/10 flex items-center justify-center flex-shrink-0">
                <FaGithub className="text-xl text-gray-400" />
              </div>
              <div>
                <p className="text-white font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">Sanjay1771</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
