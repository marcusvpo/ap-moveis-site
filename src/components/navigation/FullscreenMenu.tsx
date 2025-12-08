import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useNavigation } from './NavigationContext';
import { X, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import logoAp from '@/assets/logo-ap.png';

// Preview images
import estacao1 from '@/assets/estacao_trabalho_1.jpeg';
import cadeiraPresidente from '@/assets/cadeira_presidente.jpeg';
import estacao3 from '@/assets/estacao_trabalho_3.jpeg';

const menuItems = [
  { 
    number: '01', 
    label: 'Home', 
    path: '/',
    preview: estacao1,
    description: 'Voltar ao início'
  },
  { 
    number: '02', 
    label: 'Empresa', 
    path: '/empresa',
    preview: estacao3,
    description: 'Nossa história e valores'
  },
  { 
    number: '03', 
    label: 'Produtos', 
    path: '/produtos',
    preview: cadeiraPresidente,
    description: 'Catálogo completo'
  },
  { 
    number: '04', 
    label: 'Contato', 
    path: '/contato',
    preview: estacao1,
    description: 'Fale conosco'
  },
];

const FullscreenMenu = () => {
  const { isMenuOpen, closeMenu } = useNavigation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    closeMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const containerVariants = {
    hidden: { 
      clipPath: 'circle(0% at calc(100% - 56px) calc(100% - 56px))'
    },
    visible: { 
      clipPath: 'circle(150% at calc(100% - 56px) calc(100% - 56px))',
      transition: {
        type: "spring" as const,
        stiffness: 30,
        damping: 15,
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    },
    exit: {
      clipPath: 'circle(0% at calc(100% - 56px) calc(100% - 56px))',
      transition: {
        type: "spring" as const,
        stiffness: 50,
        damping: 20
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      filter: 'blur(10px)'
    },
    visible: { 
      opacity: 1, 
      x: 0,
      filter: 'blur(0px)',
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-[99] bg-foreground overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Close Button */}
          <motion.button
            onClick={closeMenu}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-background hover:bg-background/20 transition-colors z-10"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Logo */}
          <motion.div
            className="absolute top-4 left-4 md:top-8 md:left-8 lg:left-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <img src={logoAp} alt="AP Móveis" className="h-10 md:h-12 lg:h-16" />
          </motion.div>

          {/* Main Content */}
          <div className="h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 xl:px-24 pt-20 md:pt-0">
            {/* Menu Items */}
            <div className="flex-1 flex flex-col justify-center space-y-1 md:space-y-2 lg:space-y-4 w-full max-w-2xl">
              {menuItems.map((item) => (
                <motion.button
                  key={item.path}
                  variants={itemVariants}
                  onClick={() => handleNavigate(item.path)}
                  className={`group flex items-center gap-3 md:gap-4 lg:gap-8 text-left py-2 md:py-3 lg:py-4 transition-all ${
                    location.pathname === item.path 
                      ? 'text-accent' 
                      : 'text-background/70 hover:text-background'
                  }`}
                  whileHover={{ x: 20 }}
                >
                  {/* Number */}
                  <span className="text-xs md:text-sm lg:text-base font-light text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    {item.number}
                  </span>
                  
                  {/* Label */}
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                    {item.label}
                  </span>
                  
                  {/* Arrow */}
                  <motion.span
                    className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                  </motion.span>

                  {/* Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-background/30"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Preview Image (Desktop) */}
            <motion.div
              className="hidden lg:flex flex-1 items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative w-64 h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96">
                <motion.div
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                  animate={{
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <img
                    src={estacao1}
                    alt="Preview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 xl:w-24 xl:h-24 border-2 border-primary/30 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 xl:w-16 xl:h-16 bg-accent/20 rounded-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="absolute bottom-4 md:bottom-8 left-4 right-4 md:left-8 md:right-8 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-background/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            {/* Contact */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(16) 3202-7022</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="hover:text-background transition-colors p-2"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-background transition-colors p-2"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-background transition-colors p-2"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5516320270220"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium min-h-[40px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullscreenMenu;
