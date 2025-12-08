import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

type BackgroundType = 'aurora' | 'mesh' | 'particles' | 'waves' | 'geometric' | 'gradient';

interface AnimatedBackgroundProps {
  children: ReactNode;
  type?: BackgroundType;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  primaryColor?: string;
  accentColor?: string;
}

const AnimatedBackground = ({
  children,
  type = 'aurora',
  className = '',
  intensity = 'medium',
  primaryColor = 'primary',
  accentColor = 'accent',
}: AnimatedBackgroundProps) => {
  const opacityMap = {
    low: 0.3,
    medium: 0.5,
    high: 0.7,
  };

  const opacity = opacityMap[intensity];

  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      size: Math.random() * 6 + 2,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  const renderBackground = () => {
    switch (type) {
      case 'aurora':
        return (
          <>
            <motion.div
              className="absolute inset-0"
              style={{ opacity }}
              animate={{
                background: [
                  `radial-gradient(ellipse at 20% 30%, hsl(var(--${primaryColor}) / 0.4) 0%, transparent 50%), 
                   radial-gradient(ellipse at 80% 70%, hsl(var(--${accentColor}) / 0.3) 0%, transparent 50%)`,
                  `radial-gradient(ellipse at 30% 70%, hsl(var(--${primaryColor}) / 0.4) 0%, transparent 50%), 
                   radial-gradient(ellipse at 70% 30%, hsl(var(--${accentColor}) / 0.3) 0%, transparent 50%)`,
                  `radial-gradient(ellipse at 20% 30%, hsl(var(--${primaryColor}) / 0.4) 0%, transparent 50%), 
                   radial-gradient(ellipse at 80% 70%, hsl(var(--${accentColor}) / 0.3) 0%, transparent 50%)`,
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
              style={{
                background: `hsl(var(--${primaryColor}) / 0.2)`,
              }}
              animate={{
                x: [0, 50, -30, 0],
                y: [0, -30, 50, 0],
                scale: [1, 1.2, 0.9, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
              style={{
                background: `hsl(var(--${accentColor}) / 0.15)`,
              }}
              animate={{
                x: [0, -40, 30, 0],
                y: [0, 40, -20, 0],
                scale: [1, 0.9, 1.1, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </>
        );

      case 'mesh':
        return (
          <div
            className="absolute inset-0"
            style={{
              opacity,
              background: `
                radial-gradient(at 40% 20%, hsl(var(--${primaryColor}) / 0.3) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsl(var(--${accentColor}) / 0.2) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsl(var(--${primaryColor}-light) / 0.2) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsl(var(--${primaryColor}) / 0.15) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsl(var(--${accentColor}) / 0.15) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsl(var(--${primaryColor}-dark) / 0.2) 0px, transparent 50%)
              `,
            }}
          />
        );

      case 'particles':
        return (
          <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  width: particle.size,
                  height: particle.size,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  background: `hsl(var(--${particle.id % 2 === 0 ? primaryColor : accentColor}) / 0.6)`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 50 - 25, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        );

      case 'waves':
        return (
          <div className="absolute inset-0 overflow-hidden" style={{ opacity }}>
            <motion.div
              className="absolute w-[200%] h-1/2 bottom-0"
              style={{
                background: `linear-gradient(to top, hsl(var(--${primaryColor}) / 0.1) 0%, transparent 100%)`,
                borderRadius: '50% 50% 0 0',
              }}
              animate={{
                x: ['0%', '-50%', '0%'],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-[200%] h-1/3 bottom-0"
              style={{
                background: `linear-gradient(to top, hsl(var(--${accentColor}) / 0.08) 0%, transparent 100%)`,
                borderRadius: '40% 60% 0 0',
              }}
              animate={{
                x: ['-25%', '0%', '-25%'],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        );

      case 'geometric':
        return (
          <div className="absolute inset-0 overflow-hidden" style={{ opacity: opacity * 0.5 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute border border-current"
                style={{
                  width: `${(i + 1) * 15}%`,
                  height: `${(i + 1) * 15}%`,
                  left: `${50 - ((i + 1) * 7.5)}%`,
                  top: `${50 - ((i + 1) * 7.5)}%`,
                  borderColor: `hsl(var(--${i % 2 === 0 ? primaryColor : accentColor}) / 0.1)`,
                  borderRadius: '30%',
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 30 + i * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        );

      case 'gradient':
        return (
          <motion.div
            className="absolute inset-0"
            style={{
              opacity,
              background: `linear-gradient(135deg, 
                hsl(var(--${primaryColor}) / 0.2) 0%, 
                hsl(var(--${accentColor}) / 0.15) 50%, 
                hsl(var(--${primaryColor}) / 0.2) 100%)`,
              backgroundSize: '200% 200%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {renderBackground()}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
