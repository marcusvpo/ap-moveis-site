import { motion } from "framer-motion";
import { Shield, MapPin, Users, Award, Clock, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import AnimatedBackground from "./effects/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./effects/ScrollReveal";
import MorphingBlob from "./effects/MorphingBlob";
import GradientText from "./effects/GradientText";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const bentoItems = [
  {
    id: "years",
    icon: Clock,
    title: "35+",
    subtitle: "Anos de Mercado",
    description: "Tradição e experiência que se traduzem em qualidade e confiança para nossos clientes",
    span: "col-span-2 row-span-2",
    featured: true,
  },
  {
    id: "clients",
    icon: Users,
    title: "5.000+",
    subtitle: "Escritórios Transformados",
    span: "",
    iconColor: "text-accent",
  },
  {
    id: "guarantee",
    icon: Shield,
    title: "Garantia",
    subtitle: "Total em Todos os Produtos",
    span: "",
    iconColor: "text-primary",
    bgAccent: true,
  },
  {
    id: "award",
    icon: Award,
    title: "Qualidade",
    subtitle: "Premium Garantida",
    span: "",
    iconColor: "text-accent",
  },
  {
    id: "products",
    icon: Building2,
    title: "500+",
    subtitle: "Produtos no Catálogo",
    span: "",
    iconColor: "text-primary",
  },
];

const AboutSection = () => {
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth * 0.85;
      carouselRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth',
      });
      setActiveSlide(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth * 0.85;
      const newIndex = Math.round(carouselRef.current.scrollLeft / slideWidth);
      setActiveSlide(newIndex);
    }
  };

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

        {/* Mobile: Horizontal Carousel */}
        {isMobile ? (
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
              onScroll={handleScroll}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {bentoItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex-shrink-0 w-[85vw] snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={cn(
                      "glass-card glow-card p-6 rounded-3xl h-full min-h-[200px] flex flex-col justify-between",
                      item.bgAccent && "bg-primary/5"
                    )}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <item.icon className={cn("w-10 h-10", item.iconColor || "text-primary")} />
                    </motion.div>
                    <div className="mt-4">
                      <span className={cn(
                        "font-bold text-foreground block",
                        item.featured ? "text-6xl" : "text-3xl"
                      )}>
                        {item.featured ? <GradientText animate duration={4}>{item.title}</GradientText> : item.title}
                      </span>
                      <p className="text-lg font-semibold text-foreground mt-1">{item.subtitle}</p>
                      {item.description && (
                        <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Filiais Card */}
              <motion.div
                className="flex-shrink-0 w-[85vw] snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="glass-card glow-card p-6 rounded-3xl h-full min-h-[200px]">
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
                        Presente em <strong className="text-foreground">Jaboticabal</strong>,{" "}
                        <strong className="text-foreground">Monte Alto</strong> e{" "}
                        <strong className="text-foreground">Bebedouro</strong>. Atendemos toda a região
                        com excelência e rapidez.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {[...bentoItems, { id: 'filiais' }].map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    activeSlide === index ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"
                  )}
                  onClick={() => scrollToSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSlide(Math.min(bentoItems.length, activeSlide + 1))}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          /* Desktop: Asymmetric Bento Grid */
          <StaggerContainer
            staggerDelay={0.1}
            className="grid grid-cols-4 md:grid-cols-12 gap-4 md:gap-6 max-w-6xl mx-auto"
          >
            {/* Main Feature - Years (Larger, with offset) */}
            <StaggerItem preset="scale" className="col-span-4 md:col-span-7 row-span-2 md:-mt-8">
              <motion.div
                className="h-full glass-card glow-card p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
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
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.div>
              </motion.div>
            </StaggerItem>

            {/* Clientes - with vertical offset */}
            <StaggerItem preset="fade-up" className="col-span-2 md:col-span-5 md:mt-4">
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
            <StaggerItem preset="fade-up" className="col-span-2 md:col-span-5 md:-mr-8">
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
            <StaggerItem preset="fade-up" className="col-span-2 md:col-span-3">
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
            <StaggerItem preset="fade-up" className="col-span-2 md:col-span-4">
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

            {/* Filiais - spans full width with overlap effect */}
            <StaggerItem preset="fade-up" className="col-span-4 md:col-span-12 md:-ml-4 md:-mr-4">
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
                      Presente em <strong className="text-foreground">Jaboticabal</strong>,{" "}
                      <strong className="text-foreground">Monte Alto</strong> e{" "}
                      <strong className="text-foreground">Bebedouro</strong>. Atendemos toda a região
                      com excelência e rapidez.
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
