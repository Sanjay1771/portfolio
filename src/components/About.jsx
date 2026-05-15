import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi';

const highlights = [
  { icon: HiCode, label: 'Clean Code', color: 'text-violet-light' },
  { icon: HiLightningBolt, label: 'Fast Delivery', color: 'text-cyan-light' },
  { icon: HiGlobe, label: 'Remote Ready', color: 'text-emerald-400' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative scroll-mt-20 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me a little better"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 sm:p-10">
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                I'm a passionate <span className="text-white font-semibold">Full Stack & Flutter Developer</span> based 
                in Tamil Nadu, India. I specialize in building responsive, high-performance web, mobile, and AI-powered 
                applications for startups and businesses.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
                With expertise spanning from <span className="text-violet-light">React</span> and{' '}
                <span className="text-cyan-light">Node.js</span> on the web to{' '}
                <span className="text-blue-400">Flutter</span> for mobile, I bring ideas to life with clean code, 
                stunning UI, and scalable architecture. I love tackling complex problems and turning them into 
                simple, elegant solutions.
              </p>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                Whether it's a sleek landing page, a full-stack SaaS app, or a cross-platform mobile experience — 
                I'm here to build something amazing together. Let's create something users will love. ✨
              </p>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className="glass-card p-5 flex items-center gap-4 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <item.icon className={`text-2xl ${item.color}`} />
                </div>
                <span className="text-white font-medium text-lg">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
