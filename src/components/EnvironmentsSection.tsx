import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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
    <section id="ambientes" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Projetos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Ambientes que Inspiram
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A diferença entre um escritório comum e um escritório de sucesso
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {environments.map((env) => (
                <CarouselItem key={env.id} className="pl-4 md:basis-1/2">
                  <div className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={env.image}
                        alt={env.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground">
                        {env.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        {env.description}
                      </p>

                      <div className="mt-4 space-y-2">
                        {env.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 hover:bg-primary hover:text-primary-foreground" />
          </Carousel>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 group"
          >
            Quero um Projeto Personalizado
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentsSection;
