import { motion } from 'framer-motion';
import { HiMail, HiLightningBolt } from 'react-icons/hi';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-primary/20 to-cyan-accent/20 rounded-full blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="w-16 h-16 rounded-2xl bg-accent-gradient mx-auto mb-6 flex items-center justify-center">
            <HiLightningBolt className="text-3xl text-white" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Have a project idea?{' '}
            <span className="gradient-text">Let's build it together.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            I'm always excited to work on new projects and collaborate with amazing people. Let's turn your vision into reality.
          </p>
          <motion.a href="mailto:sanjayk.codes@gmail.com" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary text-lg !px-8 !py-4 inline-flex">
            <HiMail className="relative z-10 text-xl" />
            <span>Let's Talk</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
