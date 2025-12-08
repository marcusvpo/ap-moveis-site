import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: 'primary' | 'accent';
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
  minSize?: number;
  maxSize?: number;
}

const ParticleField = ({
  count = 30,
  className = '',
  minSize = 2,
  maxSize = 8,
}: ParticleFieldProps) => {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: Math.random() > 0.5 ? 'primary' : 'accent',
    }));
  }, [count, minSize, maxSize]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `hsl(var(--${particle.color}) / 0.4)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(var(--${particle.color}) / 0.2)`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
