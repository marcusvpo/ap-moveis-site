import { motion } from 'framer-motion';

interface MorphingBlobProps {
  className?: string;
  color?: 'primary' | 'accent' | 'mixed';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  blur?: boolean;
  opacity?: number;
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
};

const MorphingBlob = ({
  className = '',
  color = 'primary',
  size = 'lg',
  blur = true,
  opacity = 0.3,
}: MorphingBlobProps) => {
  const getGradient = () => {
    switch (color) {
      case 'primary':
        return 'from-primary/40 via-primary-light/30 to-primary/40';
      case 'accent':
        return 'from-accent/40 via-accent/30 to-accent/40';
      case 'mixed':
        return 'from-primary/40 via-accent/30 to-primary-light/40';
      default:
        return 'from-primary/40 via-primary-light/30 to-primary/40';
    }
  };

  return (
    <motion.div
      className={`absolute bg-gradient-to-br ${getGradient()} ${sizeMap[size]} ${blur ? 'blur-3xl' : ''} ${className}`}
      style={{ opacity }}
      animate={{
        borderRadius: [
          '60% 40% 30% 70% / 60% 30% 70% 40%',
          '30% 60% 70% 40% / 50% 60% 30% 60%',
          '50% 60% 30% 60% / 30% 40% 70% 50%',
          '60% 40% 50% 40% / 60% 50% 40% 60%',
          '60% 40% 30% 70% / 60% 30% 70% 40%',
        ],
        scale: [1, 1.1, 0.95, 1.05, 1],
        x: [0, 20, -10, 15, 0],
        y: [0, -15, 10, -5, 0],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export default MorphingBlob;
