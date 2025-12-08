import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import AnimatedBackground from "./effects/AnimatedBackground";
import ScrollReveal from "./effects/ScrollReveal";
import GradientText from "./effects/GradientText";
import MorphingBlob from "./effects/MorphingBlob";
import MagneticButton from "./effects/MagneticButton";

import estacao1 from "@/assets/estacao_trabalho_1.jpeg";
import estacao2 from "@/assets/estacao_trabalho_2.jpeg";
import estacao3 from "@/assets/estacao_trabalho_3.jpeg";
import estacao4 from "@/assets/estacao_trabalho_4.jpeg";

const environments = [
  {
    id: 1,
    image: estacao1,
    title: "Escritório Open Space",
    description: "Ambiente moderno e colaborativo para equipes de alta performance",
    features: ["Estações modulares", "Integração total", "Design ergonômico"],
  },
  {
    id: 2,
    image: estacao2,
    title: "Escritório Executivo",
    description: "Elegância e sofisticação para lideranças empresariais",
    features: ["Madeira premium", "Iluminação natural", "Privacidade"],
  },
  {
    id: 3,
    image: estacao3,
    title: "Sala de Reuniões",
    description: "Espaço ideal para decisões importantes e apresentações",
    features: ["Mesa ampla", "Conforto premium", "Visual impactante"],
  },
  {
    id: 4,
    image: estacao4,
    title: "Coworking Premium",
    description: "Flexibilidade e produtividade em um só lugar",
    features: ["Layout flexível", "Privacidade acústica", "Estilo moderno"],
  },
];

const EnvironmentsSection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre projetos de ambientes corporativos."
    );
    window.open(`https://wa.me/5516999999999?text=${message}`, "_blank");
  };

  return (
    <section id="ambientes" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground type="geometric" intensity="low" className="absolute inset-0" />
      
      {/* Morphing Blobs */}
      <MorphingBlob 
        className="top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" 
        color="primary" 
        size="xl" 
        opacity={0.08}
      />
      <MorphingBlob 
        className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" 
        color="accent" 
        size="lg" 
        opacity={0.06}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal preset="fade-up" className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Projetos
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Ambientes que <GradientText>Inspiram</GradientText>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A diferença entre um escritório comum e um escritório de sucesso
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal preset="slide-up" delay={0.2} className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {environments.map((env, index) => (
                <CarouselItem key={env.id} className="pl-4 md:basis-1/2">
                  <motion.div 
                    className="group relative glow-card rounded-3xl overflow-hidden bg-card border border-border/50 h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={env.image}
                        alt={env.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.7 }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                        style={{
                          background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.3), transparent)',
                        }}
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                      
                      {/* Glow on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <motion.h3 
                        className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {env.title}
                      </motion.h3>
                      <p className="text-muted-foreground mt-2">
                        {env.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        {env.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            </motion.div>
                            <span>{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Border glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        boxShadow: 'inset 0 0 0 2px hsl(var(--primary) / 0.3)',
                      }}
                    />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300" />
          </Carousel>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal preset="scale" delay={0.4} className="text-center mt-12">
          <MagneticButton
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg btn-glow"
            strength={0.2}
          >
            <span>Quero um Projeto Personalizado</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </MagneticButton>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
