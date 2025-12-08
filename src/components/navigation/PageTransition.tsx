import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        animate={{ 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
        }}
        exit={{ 
          opacity: 0, 
          y: -20, 
          filter: 'blur(5px)',
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.5
        }}
      >
        {/* Page overlay for cinematic effect */}
        <motion.div
          className="fixed inset-0 bg-primary z-50 pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: 'top' }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
