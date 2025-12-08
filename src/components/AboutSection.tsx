import { motion } from "framer-motion";
import { Shield, MapPin, Users, Award, Clock, Building2 } from "lucide-react";
import AnimatedBackground from "./effects/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./effects/ScrollReveal";
import MorphingBlob from "./effects/MorphingBlob";
import GradientText from "./effects/GradientText";

const AboutSection = () => {
  return (
    <section id="empresa" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground type="mesh" intensity="low" className="absolute inset-0" />
      
      {/* Morphing Blobs */}
      <MorphingBlob 
        className="top-0 right-0 translate-x-1/2 -translate-y-1/2" 
        color="primary" 
        size="xl" 
        opacity={0.15}
      />
      <MorphingBlob 
        className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" 
        color="accent" 
        size="lg" 
        opacity={0.1}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal preset="fade-up" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Nossa História
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Quem <GradientText>Somos</GradientText>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Há mais de 35 anos transformando ambientes corporativos em espaços de sucesso
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <StaggerContainer 
          staggerDelay={0.1}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {/* Main Feature - Years */}
          <StaggerItem preset="scale" className="col-span-2 row-span-2">
            <motion.div
              className="h-full glass-card glow-card p-8 rounded-3xl flex flex-col justify-between group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.span
                  className="text-7xl md:text-8xl font-bold block"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <GradientText animate duration={4}>35+</GradientText>
                </motion.span>
                <span className="text-2xl font-semibold text-foreground">Anos de Mercado</span>
              </div>
              <p className="text-muted-foreground mt-4">
                Tradição e experiência que se traduzem em qualidade e confiança para nossos clientes
              </p>
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              </motion.div>
            </motion.div>
          </StaggerItem>

          {/* Clientes */}
          <StaggerItem preset="fade-up">
            <motion.div
              className="glass-card glow-card p-6 rounded-3xl flex flex-col justify-between group h-full"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Users className="w-8 h-8 text-accent" />
              </motion.div>
              <div className="mt-4">
                <motion.span 
                  className="text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  5.000+
                </motion.span>
                <p className="text-muted-foreground text-sm mt-1">Escritórios Transformados</p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Garantia */}
          <StaggerItem preset="fade-up">
            <motion.div
              className="glass-card glow-card p-6 rounded-3xl flex flex-col justify-between group h-full bg-primary/5"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: -15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-foreground">Garantia</span>
                <p className="text-muted-foreground text-sm mt-1">Total em Todos os Produtos</p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Prêmio */}
          <StaggerItem preset="fade-up">
            <motion.div
              className="glass-card glow-card p-6 rounded-3xl flex flex-col justify-between group h-full"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Award className="w-8 h-8 text-accent" />
              </motion.div>
              <div className="mt-4">
                <span className="text-2xl font-bold text-foreground">Qualidade</span>
                <p className="text-muted-foreground text-sm mt-1">Premium Garantida</p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Produtos */}
          <StaggerItem preset="fade-up">
            <motion.div
              className="glass-card glow-card p-6 rounded-3xl flex flex-col justify-between group h-full"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ rotate: -15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Building2 className="w-8 h-8 text-primary" />
              </motion.div>
              <div className="mt-4">
                <motion.span 
                  className="text-4xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  500+
                </motion.span>
                <p className="text-muted-foreground text-sm mt-1">Produtos no Catálogo</p>
              </div>
            </motion.div>
          </StaggerItem>

          {/* Filiais */}
          <StaggerItem preset="fade-up" className="col-span-2">
            <motion.div
              className="glass-card glow-card p-6 rounded-3xl group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-6 h-6 text-accent" />
                </motion.div>
                <div>
                  <span className="text-2xl font-bold text-foreground">3 Filiais</span>
                  <p className="text-muted-foreground mt-2">
                    Presente em <strong className="text-foreground">Jaboticabal</strong>, <strong className="text-foreground">Monte Alto</strong> e <strong className="text-foreground">Bebedouro</strong>. 
                    Atendemos toda a região com excelência e rapidez.
                  </p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutSection;
