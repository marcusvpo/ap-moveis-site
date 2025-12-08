import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  duration?: number;
}

const GradientText = ({
  children,
  className = '',
  animate = true,
  as: Component = 'span',
}: GradientTextProps) => {
  return (
    <Component
      className={cn(
        'inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%]',
        animate && 'animate-gradient-text',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default GradientText;
