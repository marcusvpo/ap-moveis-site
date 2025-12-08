import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

type RevealType = 'words' | 'chars' | 'lines';
type EffectType = 'fade' | 'blur' | 'slide' | 'scale' | 'rotate';

interface TextRevealProps {
  children: string;
  className?: string;
  type?: RevealType;
  effect?: EffectType;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
}

const TextReveal = ({
  children,
  className = '',
  type = 'words',
  effect = 'fade',
  delay = 0,
  staggerDelay = 0.05,
  duration = 0.5,
  once = true,
  as = 'span',
}: TextRevealProps) => {
  const getItems = (): string[] => {
    switch (type) {
      case 'chars':
        return children.split('');
      case 'lines':
        return children.split('\n');
      case 'words':
      default:
        return children.split(' ');
    }
  };

  const items = getItems();

  const getVariants = (): Variants => {
    const baseHidden = { opacity: 0 };
    const baseVisible = { opacity: 1 };

    switch (effect) {
      case 'blur':
        return {
          hidden: { ...baseHidden, filter: 'blur(10px)', y: 20 },
          visible: { ...baseVisible, filter: 'blur(0px)', y: 0 },
        };
      case 'slide':
        return {
          hidden: { ...baseHidden, y: 40 },
          visible: { ...baseVisible, y: 0 },
        };
      case 'scale':
        return {
          hidden: { ...baseHidden, scale: 0.8 },
          visible: { ...baseVisible, scale: 1 },
        };
      case 'rotate':
        return {
          hidden: { ...baseHidden, rotate: -10, y: 20 },
          visible: { ...baseVisible, rotate: 0, y: 0 },
        };
      case 'fade':
      default:
        return {
          hidden: { ...baseHidden, y: 20 },
          visible: { ...baseVisible, y: 0 },
        };
    }
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    ...getVariants(),
    visible: {
      ...getVariants().visible,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={itemVariants}
          style={{ 
            marginRight: type === 'words' ? '0.25em' : undefined,
            whiteSpace: type === 'chars' && item === ' ' ? 'pre' : undefined,
          }}
        >
          {item === ' ' ? '\u00A0' : item}
        </motion.span>
      ))}
    </Component>
  );
};

export default TextReveal;
