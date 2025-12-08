import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

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
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            O Design que Você Merece
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Cadeiras e mobiliário premium para transformar seu ambiente de trabalho
          </p>
        </motion.div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image Container */}
                <div className="relative h-64 bg-gradient-to-br from-muted/50 to-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block text-xs bg-primary/20 text-primary px-2 py-1 rounded-full mr-2"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    {product.description}
                  </p>

                  <button
                    onClick={() => openWhatsApp(product.name)}
                    className="mt-4 flex items-center gap-2 text-primary font-medium group/btn"
                  >
                    <span className="relative">
                      Solicitar Orçamento
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
