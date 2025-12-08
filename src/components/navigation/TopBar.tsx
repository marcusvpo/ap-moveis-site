import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import logoAp from '@/assets/logo-ap.png';
import { useNavigation } from './NavigationContext';

const TopBar = () => {
  const location = useLocation();
  const { toggleMenu } = useNavigation();
  const isHome = location.pathname === '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-12 py-3 md:py-4 flex items-center justify-between ${
        isHome ? '' : 'glass-scrolled'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Logo */}
      <Link to="/" className="relative z-10">
        <motion.img
          src={logoAp}
          alt="AP Móveis"
          className="h-8 sm:h-10 md:h-12"
          whileHover={{ scale: 1.05 }}
        />
      </Link>

      {/* Center - Quick Contact (Desktop) */}
      <motion.a
        href="tel:+551632027022"
        className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        whileHover={{ scale: 1.02 }}
      >
        <Phone className="w-4 h-4" />
        <span>(16) 3202-7022</span>
      </motion.a>

      {/* Menu Button - Destacado */}
      <motion.button
        onClick={toggleMenu}
        className="relative flex items-center gap-3 bg-primary text-primary-foreground px-5 md:px-6 py-3 rounded-xl font-semibold text-base group overflow-hidden shadow-glow border border-primary-light/30"
        whileHover={{ 
          scale: 1.08,
          boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Abrir menu de navegação"
      >
        {/* Glow pulse animation */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary-light/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.02, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <span className="relative z-10 font-bold tracking-wide">MENU</span>
        <div className="relative z-10 flex flex-col gap-1.5">
          <motion.span 
            className="block w-5 h-0.5 bg-primary-foreground rounded-full origin-right"
            animate={{ scaleX: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.span 
            className="block w-5 h-0.5 bg-primary-foreground rounded-full"
          />
          <motion.span 
            className="block w-5 h-0.5 bg-primary-foreground rounded-full origin-left"
            animate={{ scaleX: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </div>
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        />
      </motion.button>
    </motion.header>
  );
};

export default TopBar;
