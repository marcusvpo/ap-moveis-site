import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  colors?: string[];
  duration?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const GradientText = ({
  children,
  className = '',
  animate = true,
  colors = ['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary-light))', 'hsl(var(--primary))'],
  duration = 6,
  as = 'span',
}: GradientTextProps) => {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')})`;

  const Component = motion[as];

  if (animate) {
    return (
      <Component
        className={`inline-block bg-clip-text text-transparent ${className}`}
        style={{
          backgroundImage: gradient,
          backgroundSize: '300% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </Component>
    );
  }

  return (
    <span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
      }}
    >
      {children}
    </span>
  );
};

export default GradientText;
