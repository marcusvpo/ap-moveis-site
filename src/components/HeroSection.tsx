import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAp from "@/assets/logo-ap.png";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Escritório executivo de luxo"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-48 md:w-80 h-48 md:h-80 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 pt-16 md:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Animated Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-6 md:mb-8"
          >
            <motion.img
              src={logoAp}
              alt="AP Móveis"
              className="h-16 sm:h-20 md:h-24 lg:h-28 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            />
            {/* Subtle glow effect under logo */}
            <motion.div
              className="mx-auto mt-2 w-32 md:w-48 h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-primary-foreground/90">
              +35 anos transformando escritórios
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-4 md:mb-6"
          >
            Confiança e qualidade{" "}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="relative z-10">para seu escritório.</span>
              <motion.span
                className="absolute bottom-1 md:bottom-2 left-0 right-0 h-2 md:h-3 bg-accent/40 -z-0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                style={{ originX: 0 }}
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
          >
            Transforme seu ambiente com design impecável e ergonomia de alta
            performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4"
          >
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto btn-glow bg-accent text-accent-foreground font-bold text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full group min-h-[52px]"
            >
              <a
                href="https://wa.me/5516320270220"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero Meu Upgrade Agora
                <motion.span
                  className="inline-block ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground font-medium text-base md:text-lg px-6 md:px-8 py-5 md:py-6 rounded-full backdrop-blur-sm min-h-[52px]"
            >
              <a href="#produtos">Ver Catálogo</a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            {/* Avatars */}
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary-foreground/50 overflow-hidden bg-primary-light"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Cliente satisfeito"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-primary-foreground/50 bg-accent flex items-center justify-center -ml-3"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <span className="text-xs font-bold text-accent-foreground">
                  5k+
                </span>
              </motion.div>
            </div>

            {/* Text */}
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Users className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-medium">
                Mais de <span className="text-accent font-bold">5.000</span>{" "}
                escritórios transformados
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5 md:p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-primary-foreground/60"
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
