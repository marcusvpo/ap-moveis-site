import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedBackground from "./effects/AnimatedBackground";
import ScrollReveal, { StaggerContainer, StaggerItem } from "./effects/ScrollReveal";
import GradientText from "./effects/GradientText";
import MorphingBlob from "./effects/MorphingBlob";

// Product images
import cadeiraPresidente from "@/assets/cadeira_presidente.jpeg";
import cadeiraOperacional from "@/assets/cadeira_operacional.jpeg";
import cadeiraJob from "@/assets/cadeira_job.jpeg";
import cadeiraGamer from "@/assets/cadeira_gamer.jpeg";
import cadeiraDesign from "@/assets/cadeira_design.jpeg";
import cadeiraRecepcao from "@/assets/cadeira_recepcao.jpeg";

type Category = "todos" | "presidente" | "operacional" | "recepcao" | "gamer";

interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Cadeira Presidente Nitro",
    category: "presidente",
    image: cadeiraPresidente,
    description: "Ergonomia total com encosto de cabeça ajustável",
    features: ["Apoio lombar", "Tela mesh respirável", "Base cromada"],
  },
  {
    id: 2,
    name: "Cadeira Operacional Pop",
    category: "operacional",
    image: cadeiraOperacional,
    description: "Conforto e praticidade para o dia a dia",
    features: ["Regulagem de altura", "Encosto em tela", "Compacta"],
  },
  {
    id: 3,
    name: "Cadeira Executiva Job",
    category: "operacional",
    image: cadeiraJob,
    description: "Design clássico com ergonomia moderna",
    features: ["Braços reguláveis", "Estofado premium", "Back system"],
  },
  {
    id: 4,
    name: "Cadeira Gamer Pro",
    category: "gamer",
    image: cadeiraGamer,
    description: "Alta performance para longas jornadas",
    features: ["Reclinável 180°", "Apoio de pés", "Almofadas incluídas"],
  },
  {
    id: 5,
    name: "Poltrona Design",
    category: "recepcao",
    image: cadeiraDesign,
    description: "Elegância para ambientes sofisticados",
    features: ["Design moderno", "Estrutura reforçada", "Fácil limpeza"],
  },
  {
    id: 6,
    name: "Cadeira Recepção Vitrine",
    category: "recepcao",
    image: cadeiraRecepcao,
    description: "Sofisticação e conforto para visitantes",
    features: ["Base em aço", "Estofado couro", "Design clean"],
  },
];

const categories = [
  { id: "todos" as Category, label: "Todos" },
  { id: "presidente" as Category, label: "Cadeiras Presidente" },
  { id: "operacional" as Category, label: "Operacionais" },
  { id: "recepcao" as Category, label: "Recepção" },
  { id: "gamer" as Category, label: "Gamer" },
];

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("todos");

  const filteredProducts =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const openWhatsApp = (productName: string) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre o produto: ${productName}`
    );
    window.open(`https://wa.me/5516999999999?text=${message}`, "_blank");
  };

  return (
    <section id="produtos" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground type="waves" intensity="low" className="absolute inset-0" />
      
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
        <ScrollReveal preset="fade-up" className="text-center mb-12">
          <motion.span 
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Catálogo
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            O Design que Você <GradientText>Merece</GradientText>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Cadeiras e mobiliário premium para transformar seu ambiente de trabalho
          </p>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal preset="fade-up" delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === cat.id && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-primary-light to-primary"
                  layoutId="activeCategory"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  layout: { duration: 0.3 }
                }}
                className="group relative glow-card bg-card rounded-3xl overflow-hidden border border-border/50"
                whileHover={{ y: -8 }}
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                    style={{
                      background: 'linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)',
                    }}
                  />
                  
                  {/* Hover Overlay with Features */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="space-y-2"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      {product.features.map((feature, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block text-xs bg-primary/20 text-primary px-3 py-1.5 rounded-full mr-2 backdrop-blur-sm"
                          initial={{ opacity: 0, y: 10 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3 
                    className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                    layoutId={`title-${product.id}`}
                  >
                    {product.name}
                  </motion.h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {product.description}
                  </p>

                  <motion.button
                    onClick={() => openWhatsApp(product.name)}
                    className="mt-4 flex items-center gap-2 text-primary font-medium group/btn"
                    whileHover={{ x: 5 }}
                  >
                    <span className="relative">
                      Solicitar Orçamento
                      <motion.span 
                        className="absolute left-0 bottom-0 h-0.5 bg-primary"
                        initial={{ width: 0 }}
                        whileHover={{ width: '100%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 40px hsl(var(--primary) / 0.15), inset 0 0 40px hsl(var(--primary) / 0.05)',
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
