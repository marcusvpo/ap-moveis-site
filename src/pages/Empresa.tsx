import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, MapPin, Clock, Building2, Users, Award } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import PromoBanner from '@/components/PromoBanner';
import banner05 from '@/assets/banners/banner-05.jpg';

const values = [
  { icon: Heart, title: 'Paixão', description: 'Amamos o que fazemos e isso reflete em cada produto' },
  { icon: Users, title: 'Compromisso', description: 'Nosso cliente é nossa prioridade número um' },
  { icon: Award, title: 'Qualidade', description: 'Excelência em cada detalhe, do design à entrega' },
  { icon: Building2, title: 'Inovação', description: 'Sempre buscando as melhores soluções do mercado' },
];

const timeline = [
  { year: '1989', title: 'Fundação', description: 'Início das atividades em Jaboticabal' },
  { year: '2005', title: 'Expansão', description: 'Inauguração da filial de Monte Alto' },
  { year: '2015', title: 'Crescimento', description: 'Nova filial em Bebedouro' },
  { year: '2024', title: 'Consolidação', description: '+5.000 escritórios transformados' },
];

const branches = [
  { city: 'Jaboticabal', since: '1989', address: 'Rua São Sebastião, 122 - Centro' },
  { city: 'Monte Alto', since: '2005', address: 'Rua Nhonho do Livramento, 2155 - Centro' },
  { city: 'Bebedouro', since: '2015', address: 'Av. Edne José Piffer, 561 - Res. Hércules Hortal' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15
    }
  }
};

const Empresa = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-foreground" />
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px md:60px md:60px'
          }} />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center px-4 md:px-6 py-24 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block text-accent font-medium text-xs md:text-sm lg:text-base tracking-wider uppercase mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Desde 1989
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Transformando
            <br />
            <span className="text-accent">Escritórios</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Há mais de 35 anos criando ambientes de trabalho que inspiram produtividade e bem-estar
          </motion.p>

          {/* Animated Counter */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-center">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-accent">35+</span>
              <span className="text-primary-foreground/70 text-xs md:text-sm">Anos</span>
            </div>
            <div className="h-8 md:h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-accent">5.000+</span>
              <span className="text-primary-foreground/70 text-xs md:text-sm">Clientes</span>
            </div>
            <div className="h-8 md:h-12 w-px bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-accent">3</span>
              <span className="text-primary-foreground/70 text-xs md:text-sm">Filiais</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center pt-1.5 md:pt-2">
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-accent rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-xs md:text-sm tracking-wider uppercase">
              Nosso Propósito
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Missão, Visão e Valores
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden"
            >
              <motion.div
                className="absolute -top-10 -right-10 w-32 md:w-40 h-32 md:h-40 bg-accent/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <Target className="w-10 h-10 md:w-12 md:h-12 text-accent mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">Missão</h3>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                Fornecer soluções completas em mobiliário corporativo, unindo design, ergonomia e qualidade 
                para criar ambientes de trabalho que impulsionam a produtividade e o bem-estar dos nossos clientes.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-muted rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 overflow-hidden border border-border"
            >
              <Eye className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4 md:mb-6" />
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">Visão</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Ser reconhecida como a principal referência em móveis para escritórios na região, 
                expandindo nossa presença e mantendo o compromisso com a excelência e satisfação do cliente.
              </p>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group relative bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border hover:border-primary/50 transition-all hover:shadow-glow"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 5 }}
                >
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </motion.div>
                <h4 className="text-lg md:text-xl font-bold text-foreground mb-1 md:mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Banner promocional */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PromoBanner 
            image={banner05} 
            alt="Promoção AP Móveis - Qualidade que dura, investimento que retorna" 
          />
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-xs md:text-sm tracking-wider uppercase">
              Onde Estamos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              Nossas Filiais
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {branches.map((branch, index) => (
              <motion.div
                key={branch.city}
                variants={itemVariants}
                className="group relative bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border hover:border-primary/30 transition-all"
                whileHover={{ y: -10 }}
              >
                {/* Placeholder for Image */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center">
                    <Building2 className="w-12 h-12 md:w-16 md:h-16 text-primary/30 mx-auto mb-3 md:mb-4" />
                    <span className="text-muted-foreground text-xs md:text-sm">Foto da filial</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 text-primary font-medium text-xs md:text-sm mb-2">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" />
                    <span>Desde {branch.since}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{branch.city}</h3>
                  <div className="flex items-start gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{branch.address}</span>
                  </div>

                  <Link
                    to="/contato"
                    className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all text-sm md:text-base"
                  >
                    Ver detalhes
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-xs md:text-sm tracking-wider uppercase">
              Nossa Trajetória
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
              História
            </h2>
          </motion.div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center gap-6 md:gap-8 mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-6 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full -translate-x-1/2 z-10 ring-4 ring-background"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <span className="text-accent font-bold text-xl md:text-2xl">{item.year}</span>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">{item.title}</h3>
                  <p className="text-muted-foreground mt-1 md:mt-2 text-sm md:text-base">{item.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 md:px-6 lg:px-12 bg-gradient-to-br from-primary to-primary-dark">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
            Pronto para transformar seu escritório?
          </h2>
          <p className="text-base md:text-lg text-primary-foreground/80 mb-6 md:mb-8 px-4">
            Entre em contato e receba um orçamento personalizado
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-accent-hover transition-colors btn-glow min-h-[48px]"
          >
            Fale Conosco
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Empresa;
