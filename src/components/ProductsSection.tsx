import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "./effects/AnimatedBackground";
import ScrollReveal from "./effects/ScrollReveal";
import GradientText from "./effects/GradientText";
import MorphingBlob from "./effects/MorphingBlob";
import ProgressiveImage from "./ProgressiveImage";
import { categories } from "@/data/products";

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground
        type="waves"
        intensity="low"
        className="absolute inset-0"
      />

      {/* Decorative blobs */}
      <MorphingBlob
        className="top-1/4 -right-32"
        color="accent"
        size="lg"
        opacity={0.08}
      />
      <MorphingBlob
        className="bottom-1/4 -left-32"
        color="primary"
        size="xl"
        opacity={0.06}
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal preset="fade-up" className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Catálogo
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Explore Nossas <GradientText>Categorias</GradientText>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Soluções completas para todos os ambientes do seu escritório
          </p>
        </ScrollReveal>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              preset="fade-up"
              delay={index * 0.1}
            >
              <Link
                to={`/produtos/${category.id}`}
                className="group block h-full"
              >
                <motion.div
                  className="relative h-full bg-card rounded-3xl overflow-hidden border border-border/50 glow-card"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <ProgressiveImage
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full"
                      imgClassName="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Floating Badge */}
                    <motion.div
                      className="absolute top-4 right-4 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-foreground flex items-center gap-1 border border-white/10"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Sparkles className="w-3 h-3 text-accent" />
                      {category.productCount}+ itens
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 -mt-12 z-20">
                    <div className="bg-card/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-lg group-hover:bg-card/95 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {category.name}
                        </h3>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                          whileHover={{ rotate: -45 }}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: "inset 0 0 0 2px hsl(var(--primary) / 0.3)",
                    }}
                  />
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal
          preset="fade-up"
          delay={0.4}
          className="text-center mt-12"
        >
          <Link
            to="/produtos"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors btn-glow"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsSection;
