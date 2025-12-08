import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle, ChevronRight, Filter } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { categories, products, getProductsByCategory, ProductCategory, Product } from '@/data/products';

const ProdutosCategoria = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const [activeFilter, setActiveFilter] = useState<string>('todos');
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const category = categories.find(c => c.id === categoria);
  const categoryProducts = useMemo(() => 
    getProductsByCategory(categoria as ProductCategory), 
    [categoria]
  );

  // Get unique subcategories
  const subcategories = useMemo(() => {
    const subs = categoryProducts
      .map(p => p.subcategory)
      .filter((v, i, a) => v && a.indexOf(v) === i) as string[];
    return ['todos', ...subs];
  }, [categoryProducts]);

  // Filter products
  const filteredProducts = useMemo(() => {
    if (activeFilter === 'todos') return categoryProducts;
    return categoryProducts.filter(p => p.subcategory === activeFilter);
  }, [categoryProducts, activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 }
    }
  };

  if (!category) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
            <Link to="/produtos" className="text-primary hover:underline">
              Voltar para Produtos
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/produtos" className="hover:text-primary-foreground transition-colors">Produtos</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-accent">{category.name}</span>
          </motion.nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.span
                className="inline-block bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {category.productCount}+ produtos
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
                {category.name}
              </h1>
              
              <p className="text-lg text-primary-foreground/70 max-w-xl">
                {category.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Link
                to="/produtos"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Todas Categorias</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      {subcategories.length > 1 && (
        <section className="px-6 md:px-12 py-6 bg-muted border-b border-border sticky top-0 z-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">Filtrar:</span>
              </div>
              {subcategories.map((sub) => (
                <motion.button
                  key={sub}
                  onClick={() => setActiveFilter(sub)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeFilter === sub
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background text-muted-foreground hover:bg-background/80'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {sub === 'todos' ? 'Todos' : sub.charAt(0).toUpperCase() + sub.slice(1)}
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid */}
      <section className="px-6 md:px-12 py-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  className="group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all shadow-soft hover:shadow-glow">
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: hoveredProduct === product.id ? 1.1 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Quick features overlay */}
                      <motion.div
                        className="absolute inset-0 bg-foreground/80 flex flex-col items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <span className="text-accent font-medium text-sm mb-3">Características</span>
                        <ul className="text-primary-foreground text-sm space-y-1 text-center">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <li key={i}>• {feature}</li>
                          ))}
                        </ul>
                      </motion.div>

                      {/* Subcategory badge */}
                      {product.subcategory && (
                        <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium capitalize">
                          {product.subcategory}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      
                      {product.description && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {product.description}
                        </p>
                      )}

                      <motion.a
                        href={`https://wa.me/5516320270220?text=Olá! Tenho interesse no produto: ${product.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-3 rounded-xl font-semibold hover:bg-accent-hover transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        Solicitar Orçamento
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground text-lg">
                Nenhum produto encontrado nesta categoria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="px-6 md:px-12 py-16 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Explore Outras Categorias
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories
              .filter(c => c.id !== categoria)
              .map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/produtos/${cat.id}`}
                    className="group block relative aspect-[4/3] rounded-xl overflow-hidden"
                  >
                    <img 
                      src={cat.image} 
                      alt={cat.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-foreground/60 group-hover:bg-foreground/70 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-lg group-hover:text-accent transition-colors">
                        {cat.name}
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-16 bg-gradient-to-r from-primary to-primary-dark">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
            Precisa de ajuda para escolher?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Nossa equipe está pronta para ajudá-lo a encontrar a solução ideal
          </p>
          <motion.a
            href="https://wa.me/5516320270220?text=Olá! Preciso de ajuda para escolher produtos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-hover transition-colors btn-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default ProdutosCategoria;
