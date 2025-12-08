import { motion } from "framer-motion";
import { Shield, MapPin, Users, Award, Clock, Building2 } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const AboutSection = () => {
  return (
    <section id="empresa" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Nossa História
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
            Quem Somos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Há mais de 35 anos transformando ambientes corporativos em espaços de sucesso
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          {/* Main Feature - Years */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 row-span-2 glass-card p-8 rounded-3xl flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <motion.span
                className="text-7xl md:text-8xl font-bold text-primary block"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                35+
              </motion.span>
              <span className="text-2xl font-semibold text-foreground">Anos de Mercado</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Tradição e experiência que se traduzem em qualidade e confiança para nossos clientes
            </p>
          </motion.div>

          {/* Clientes */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-accent/30 transition-all duration-300"
          >
            <Users className="w-8 h-8 text-accent" />
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">5.000+</span>
              <p className="text-muted-foreground text-sm mt-1">Escritórios Transformados</p>
            </div>
          </motion.div>

          {/* Garantia */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-primary/30 transition-all duration-300 bg-primary/5"
          >
            <Shield className="w-8 h-8 text-primary" />
            <div className="mt-4">
              <span className="text-2xl font-bold text-foreground">Garantia</span>
              <p className="text-muted-foreground text-sm mt-1">Total em Todos os Produtos</p>
            </div>
          </motion.div>

          {/* Prêmio */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-accent/30 transition-all duration-300"
          >
            <Award className="w-8 h-8 text-accent" />
            <div className="mt-4">
              <span className="text-2xl font-bold text-foreground">Qualidade</span>
              <p className="text-muted-foreground text-sm mt-1">Premium Garantida</p>
            </div>
          </motion.div>

          {/* Produtos */}
          <motion.div
            variants={itemVariants}
            className="glass-card p-6 rounded-3xl flex flex-col justify-between group hover:border-primary/30 transition-all duration-300"
          >
            <Building2 className="w-8 h-8 text-primary" />
            <div className="mt-4">
              <span className="text-4xl font-bold text-foreground">500+</span>
              <p className="text-muted-foreground text-sm mt-1">Produtos no Catálogo</p>
            </div>
          </motion.div>

          {/* Filiais */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 glass-card p-6 rounded-3xl group hover:border-accent/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">3 Filiais</span>
                <p className="text-muted-foreground mt-2">
                  Presente em <strong className="text-foreground">Jaboticabal</strong>, <strong className="text-foreground">Monte Alto</strong> e <strong className="text-foreground">Bebedouro</strong>. 
                  Atendemos toda a região com excelência e rapidez.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
