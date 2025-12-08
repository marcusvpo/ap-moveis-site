import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    '/': 'Home',
    '/empresa': 'Empresa',
    '/produtos': 'Produtos',
    '/contato': 'Contato',
  };
  return titles[pathname] || 'AP Móveis';
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Curtain overlay */}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <>
            {/* First curtain */}
            <motion.div
              key="curtain-1"
              className="fixed inset-0 bg-primary z-[100]"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Second curtain (delay) */}
            <motion.div
              key="curtain-2"
              className="fixed inset-0 bg-accent z-[99]"
              initial={{ y: '100%' }}
              animate={{ y: '0%' }}
              exit={{ y: '-100%' }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08,
              }}
            />

            {/* Page title during transition */}
            <motion.div
              key="title"
              className="fixed inset-0 z-[101] flex items-center justify-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.15 }}
            >
              <span className="text-4xl md:text-6xl font-bold text-primary-foreground">
                {getPageTitle(location.pathname)}
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Content with stagger */}
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
