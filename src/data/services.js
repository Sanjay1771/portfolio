import { HiCode, HiDeviceMobile, HiServer, HiDatabase, HiCog, HiLightningBolt } from 'react-icons/hi';

const services = [
  {
    id: 1,
    title: 'Website Development',
    description: 'Building responsive, pixel-perfect websites with modern frameworks like React and Tailwind CSS that look stunning on every device.',
    icon: HiCode,
    gradient: 'from-violet-primary to-cyan-accent',
  },
  {
    id: 2,
    title: 'Full Stack Applications',
    description: 'End-to-end web applications with robust backends using Node.js, Express, and scalable database architectures.',
    icon: HiServer,
    gradient: 'from-cyan-accent to-emerald-400',
  },
  {
    id: 3,
    title: 'Flutter Mobile Apps',
    description: 'Cross-platform mobile applications with beautiful UI, smooth animations, and native-like performance using Flutter & Dart.',
    icon: HiDeviceMobile,
    gradient: 'from-blue-500 to-violet-primary',
  },
  {
    id: 4,
    title: 'REST API Development',
    description: 'Designing and building secure, well-documented RESTful APIs with authentication, validation, and error handling.',
    icon: HiLightningBolt,
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    id: 5,
    title: 'Database Design',
    description: 'Architecting efficient database schemas with MongoDB, MySQL, Firebase, and Supabase for optimal performance.',
    icon: HiDatabase,
    gradient: 'from-emerald-400 to-cyan-accent',
  },
  {
    id: 6,
    title: 'Bug Fixing & Optimization',
    description: 'Debugging complex issues, optimizing performance bottlenecks, and refactoring code for maintainability.',
    icon: HiCog,
    gradient: 'from-rose-400 to-violet-primary',
  },
];

export default services;
