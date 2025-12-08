import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  tiltEnabled?: boolean;
  tiltStrength?: number;
  glowStrength?: number;
}

const GlowCard = ({
  children,
  className = '',
  glowColor = 'primary',
  tiltEnabled = true,
  tiltStrength = 10,
  glowStrength = 0.4,
}: GlowCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const rotateX = useTransform(y, [-0.5, 0.5], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
  const rotateY = useTransform(x, [-0.5, 0.5], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !tiltEnabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const x = (e.clientX - centerX) / rect.width;
    const y = (e.clientY - centerY) / rect.height;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const glowX = useTransform(x, [-0.5, 0.5], ['0%', '100%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['0%', '100%']);

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-2xl overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tiltEnabled ? rotateX : 0,
        rotateY: tiltEnabled ? rotateY : 0,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, 
            hsl(var(--${glowColor}) / 0.6), 
            hsl(var(--accent) / 0.4),
            hsl(var(--${glowColor}) / 0.6)
          )`,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Card background */}
      <div className="absolute inset-[1px] rounded-2xl bg-card z-10" />

      {/* Glow spot that follows cursor */}
      <motion.div
        className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            circle at var(--glow-x, 50%) var(--glow-y, 50%),
            hsl(var(--${glowColor}) / ${glowStrength}) 0%,
            transparent 50%
          )`,
          '--glow-x': glowX,
          '--glow-y': glowY,
        } as any}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 z-20 opacity-0"
        initial={{ x: '-100%' }}
        whileHover={{
          x: '100%',
          opacity: 0.1,
          transition: { duration: 0.8, ease: 'easeInOut' },
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)',
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
