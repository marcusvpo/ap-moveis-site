import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltStrength?: number;
  glowEnabled?: boolean;
  scaleOnHover?: number;
}

const TiltCard = ({
  children,
  className = '',
  tiltStrength = 15,
  glowEnabled = true,
  scaleOnHover = 1.02,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [0, 1], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
  const rotateY = useTransform(springX, [0, 1], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

  const glowX = useTransform(springX, [0, 1], ['0%', '100%']);
  const glowY = useTransform(springY, [0, 1], ['0%', '100%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      {glowEnabled && (
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(
              circle at ${glowX.get()}% ${glowY.get()}%,
              hsl(var(--primary) / 0.15) 0%,
              transparent 50%
            )`,
          }}
        />
      )}

      {/* Shadow that moves with tilt */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-2xl"
        style={{
          boxShadow: `
            ${useTransform(springX, [0, 1], [-10, 10]).get()}px 
            ${useTransform(springY, [0, 1], [-10, 10]).get()}px 
            40px hsl(var(--foreground) / 0.1)
          `,
        }}
      />

      {children}
    </motion.div>
  );
};

export default TiltCard;
