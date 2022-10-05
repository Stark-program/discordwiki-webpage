import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { useCallback, useMemo } from 'react';

// NOT USING THIS

export default function ParticlesComponent() {
  const particlesOptions = useMemo(() => {
    return {
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
        },
        modes: {
          push: {
            quantity: 10,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
            radius: 100,
          },
        },
      },

      background: {
        color: '#2C2F33',
      },
      particles: {
        links: {
          enable: true,
        },
        move: {
          enable: true,
        },
        opacity: {
          value: { min: 0.1, max: 1 },
        },
        size: {
          value: { min: 1, max: 5 },
        },
        fullScreen: {
          enable: true,

          zIndex: 0,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine: any) => {
    return loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={particlesOptions} />;
}
