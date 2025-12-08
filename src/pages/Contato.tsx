import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, Mail, ChevronRight } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';
import { branches, Branch } from '@/data/branches';

const Contato = () => {
  const [activeBranch, setActiveBranch] = useState<Branch>(branches[0]);

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
    hidden: { opacity: 0, y: 20 },
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

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 lg:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted to-background" />
        
        {/* Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 md:left-20 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.span
            className="inline-block text-primary font-medium text-xs md:text-sm tracking-wider uppercase mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Entre em Contato
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Vamos
            <span className="text-primary"> Conversar?</span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Escolha a filial mais próxima de você e entre em contato. 
            Estamos prontos para atendê-lo!
          </motion.p>
        </motion.div>
      </section>

      {/* Branch Selector */}
      <section className="px-4 md:px-6 lg:px-12 pb-6 md:pb-8">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {branches.map((branch) => (
              <motion.button
                key={branch.id}
                onClick={() => setActiveBranch(branch)}
                className={`relative px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all text-sm md:text-base min-h-[44px] ${
                  activeBranch.id === branch.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {branch.name}
                {activeBranch.id === branch.id && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary -z-10"
                    layoutId="activeBranch"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="px-4 md:px-6 lg:px-12 py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBranch.id}
              className="grid lg:grid-cols-2 gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Info Card */}
              <motion.div
                variants={itemVariants}
                className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 border border-border shadow-soft"
              >
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs md:text-sm text-muted-foreground">Filial</span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{activeBranch.name}</h2>
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-muted-foreground">Endereço</span>
                      <p className="text-foreground font-medium text-sm md:text-base">{activeBranch.address}</p>
                      <p className="text-muted-foreground text-sm">{activeBranch.neighborhood}</p>
                      <p className="text-muted-foreground text-sm">{activeBranch.city}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-muted-foreground">Telefone</span>
                      <a 
                        href={`tel:${activeBranch.phone.replace(/\D/g, '')}`}
                        className="block text-foreground font-medium hover:text-primary transition-colors text-sm md:text-base"
                      >
                        {activeBranch.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-muted-foreground">WhatsApp</span>
                      <a 
                        href={`https://wa.me/${activeBranch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-foreground font-medium hover:text-primary transition-colors text-sm md:text-base"
                      >
                        {activeBranch.phone}
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs md:text-sm text-muted-foreground">Horário de Funcionamento</span>
                      <p className="text-foreground font-medium text-sm md:text-base">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground text-sm">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8">
                  <motion.a
                    href={`https://wa.me/${activeBranch.whatsapp}?text=Olá! Vim pelo site e gostaria de mais informações.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold hover:bg-[#128C7E] transition-colors min-h-[48px] text-sm md:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    WhatsApp
                  </motion.a>
                  <motion.a
                    href={`tel:${activeBranch.phone.replace(/\D/g, '')}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors min-h-[48px] text-sm md:text-base"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    Ligar Agora
                  </motion.a>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={itemVariants}
                className="bg-card rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-soft min-h-[300px] md:min-h-[400px]"
              >
                <iframe
                  src={`https://www.google.com/maps?q=${activeBranch.coordinates.lat},${activeBranch.coordinates.lng}&z=15&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '300px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa ${activeBranch.name}`}
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Branches Quick Access */}
      <section className="px-4 md:px-6 lg:px-12 py-12 md:py-16 bg-muted">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Todas as Filiais
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                className="bg-card rounded-xl md:rounded-2xl p-4 md:p-6 border border-border hover:border-primary/30 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => setActiveBranch(branch)}
              >
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 flex items-center justify-between">
                  {branch.name}
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4">
                  {branch.address}, {branch.neighborhood}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm md:text-base">
                  <Phone className="w-3 h-3 md:w-4 md:h-4" />
                  <span>{branch.phone}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Email CTA */}
      <section className="px-4 md:px-6 lg:px-12 py-12 md:py-16">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-primary-dark rounded-2xl md:rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Mail className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-4 md:mb-6" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-3 md:mb-4">
            Prefere email?
          </h2>
          <p className="text-primary-foreground/80 mb-4 md:mb-6 text-sm md:text-base">
            Envie sua mensagem e retornaremos em até 24 horas
          </p>
          <a
            href="mailto:contato@apmoveis.com.br"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-accent-hover transition-colors text-sm md:text-base min-h-[44px]"
          >
            contato@apmoveis.com.br
          </a>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Contato;
