# Sanjay K — Portfolio

Premium, modern, fully responsive personal portfolio built with React 18, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Glassmorphism UI** — Frosted glass cards with backdrop blur
- 🌈 **Gradient Accents** — Violet (#8B5CF6) to Cyan (#06B6D4)
- 🎬 **Framer Motion Animations** — Smooth scroll reveals, hover lifts, stagger effects
- ⌨️ **Typing Effect** — Dynamic role showcase in hero
- ⌘K **Command Palette** — Quick navigation (Ctrl+K / ⌘K)
- 📱 **Fully Responsive** — Mobile-first, works on all devices
- 🔍 **SEO Optimized** — Meta tags, Open Graph, JSON-LD schema
- ♿ **Accessible** — ARIA labels, keyboard navigation, focus styles
- 🎯 **11 Sections** — Hero, About, Skills, Services, Projects, Education, Testimonials, Stats, CTA, Contact, Footer

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI Framework |
| Vite | Build Tool |
| Tailwind CSS 3 | Styling |
| Framer Motion | Animations |
| React Icons | Icon Library |
| React Typed | Typing Effect |
| tsparticles | Particle Background |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/sanjayk/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## 🌐 Deploy to Vercel

### Option 1: CLI
```bash
npm install -g vercel
vercel
```

### Option 2: GitHub Integration
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects Vite and deploys

### Build Settings (if needed)
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

## 📁 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Testimonials.jsx
│   ├── Stats.jsx
│   ├── CTA.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── CommandMenu.jsx
│   ├── GlassCard.jsx
│   ├── SectionHeading.jsx
│   ├── AnimatedCounter.jsx
│   ├── ScrollToTop.jsx
│   └── ParticlesBg.jsx
├── data/            # Static data files
├── hooks/           # Custom React hooks
├── App.jsx
├── main.jsx
└── index.css
```

## 📝 Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Content**: Edit files in `src/data/`
- **Social Links**: Edit `src/data/socialLinks.js`
- **Projects**: Edit `src/data/projects.js`
- **Resume**: Replace `public/resume.pdf`

## 📄 License

MIT © Sanjay K
