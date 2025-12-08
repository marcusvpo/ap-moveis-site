import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';
import apLogo from '@/assets/ap-logo.png';
import { useNavigation } from './NavigationContext';

const TopBar = () => {
  const location = useLocation();
  const { toggleMenu } = useNavigation();
  const isHome = location.pathname === '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex items-center justify-between ${
        isHome ? '' : 'glass-scrolled'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      {/* Logo */}
      <Link to="/" className="relative z-10">
        <motion.img
          src={apLogo}
          alt="AP Móveis"
          className="h-10 md:h-12"
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

      {/* Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="relative flex items-center gap-3 bg-foreground text-background px-4 py-2 rounded-full font-medium text-sm group overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">Menu</span>
        <div className="relative z-10 flex flex-col gap-1">
          <motion.span 
            className="block w-4 h-0.5 bg-background rounded-full"
            whileHover={{ width: 16 }}
          />
          <motion.span 
            className="block w-3 h-0.5 bg-background rounded-full"
            whileHover={{ width: 16 }}
          />
        </div>
        
        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-primary"
          initial={{ x: '-100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.button>
    </motion.header>
  );
};

export default TopBar;
