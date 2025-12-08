import { motion } from 'framer-motion';
import { useNavigation } from './NavigationContext';
import logoAp from '@/assets/logo-ap.png';

const NavigationOrb = () => {
  const { isMenuOpen, toggleMenu } = useNavigation();

  return (
    <motion.button
      onClick={toggleMenu}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-glow cursor-pointer overflow-hidden group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isMenuOpen ? 0 : 1, 
        opacity: isMenuOpen ? 0 : 1,
        rotate: isMenuOpen ? 180 : 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: isMenuOpen ? 0 : 0.3
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 60px hsl(202 61% 44% / 0.6)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary-light"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Inner glow */}
      <motion.div
        className="absolute inset-1 rounded-full bg-primary-light/30"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Logo */}
      <motion.img
        src={logoAp}
        alt="Menu"
        className="w-10 h-10 object-contain relative z-10"
        animate={{
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Hover text */}
      <motion.span
        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-foreground text-background px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        Menu
      </motion.span>
    </motion.button>
  );
};

export default NavigationOrb;
