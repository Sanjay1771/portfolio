import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(() => ({
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: { value: 40, density: { enable: true, area: 800 } },
      color: { value: ['#8B5CF6', '#06B6D4'] },
      shape: { type: 'circle' },
      opacity: { value: 0.15, random: { enable: true, minimumValue: 0.05 } },
      size: { value: { min: 1, max: 3 } },
      move: { enable: true, speed: 0.5, direction: 'none', random: true, outModes: 'out' },
      links: { enable: true, distance: 150, color: '#8B5CF6', opacity: 0.05, width: 1 },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="hero-particles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
