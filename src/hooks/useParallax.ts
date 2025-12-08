import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { RefObject, useEffect, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  offset?: [string, string];
}

interface ParallaxResult {
  y: MotionValue<number>;
  x: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: ParallaxOptions = {}
): ParallaxResult => {
  const { speed = 0.5, direction = 'up', offset = ['start end', 'end start'] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  const range = 100 * speed;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [range, -range] : direction === 'down' ? [-range, range] : [0, 0]
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [range, -range] : direction === 'right' ? [-range, range] : [0, 0]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return { y, x, opacity, scale };
};

// Hook for scroll-based animations
export const useScrollAnimation = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setIsVisible(scrolled > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
};

export default useParallax;
