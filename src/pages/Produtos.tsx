import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import PromoBanner from "@/components/PromoBanner";
import { categories } from "@/data/products";
import bannerDesktop from "@/assets/banners_desktop/banner-basico-desktop.jpg";
import bannerMobile from "@/assets/banners_mobile/banner-basico-mobile.png";

const Produtos = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-primary-dark" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-40 right-10 md:right-20 w-48 md:w-64 h-48 md:h-64 bg-primary/20 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-5 md:left-10 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            Mais de 200 produtos
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Conheça Nossa
            <br />
            <span className="text-accent">Linha Completa</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-primary-foreground/70 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Explore nossas categorias e encontre a solução perfeita para seu
            ambiente de trabalho
          </motion.p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="px-4 md:px-6 lg:px-12 py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group"
              >
                <Link
                  to={`/produtos/${category.id}`}
                  className="block relative aspect-square rounded-2xl md:rounded-3xl overflow-hidden"
                >
                  {/* Image */}
                  <motion.img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-3 md:p-5 lg:p-6 flex flex-col justify-end">
                    {/* Product count badge */}
                    <motion.span
                      className="self-start bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-[10px] md:text-xs font-medium mb-2 md:mb-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      {category.productCount}+ produtos
                    </motion.span>

                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary-foreground mb-1 group-hover:text-accent transition-colors">
                      {category.name}
                    </h2>

                    <p className="text-primary-foreground/70 mb-2 md:mb-3 line-clamp-2 text-xs md:text-sm">
                      {category.description}
                    </p>

                    <motion.div
                      className="flex items-center gap-2 text-accent font-medium text-xs md:text-sm"
                      initial={{ x: 0 }}
                      whileHover={{ x: 10 }}
                    >
                      <span>Ver Produtos</span>
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                    </motion.div>
                  </div>

                  {/* Hover border effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-accent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Banner promocional */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <PromoBanner
            imageMobile={bannerMobile}
            imageDesktop={bannerDesktop}
            alt="Promoção AP Móveis - Qualidade e design para seu escritório"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-6 lg:px-12 py-16 md:py-24 bg-muted">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
            Temos um catálogo ainda maior em nossas lojas físicas. Entre em
            contato!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
            <motion.a
              href="https://wa.me/5516988255107?text=Olá! Gostaria de ver mais opções de produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-accent-hover transition-colors btn-glow min-h-[48px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </motion.a>
            <Link
              to="/contato"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-foreground/90 transition-colors min-h-[48px]"
            >
              Ver Nossas Lojas
            </Link>
          </div>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Produtos;
