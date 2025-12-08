import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  className,
  imgClassName,
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={cn('relative overflow-hidden', className)}>
      {/* Placeholder with shimmer */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 bg-muted"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['200% 0', '-200% 0'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                background: `linear-gradient(90deg, 
                  transparent, 
                  hsl(var(--primary) / 0.1), 
                  transparent)`,
                backgroundSize: '200% 100%',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Real image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover', imgClassName, !isLoaded && 'opacity-0')}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            scale: isLoaded ? 1 : 1.1 
          }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
