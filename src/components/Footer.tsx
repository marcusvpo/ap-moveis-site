import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock } from "lucide-react";
import apLogo from "@/assets/ap-logo.png";

const stores = [
  {
    city: "Jaboticabal",
    address: "Rua Principal, 123 - Centro",
    phone: "(16) 99999-9999",
  },
  {
    city: "Monte Alto",
    address: "Av. Central, 456 - Centro",
    phone: "(16) 99999-9999",
  },
  {
    city: "Bebedouro",
    address: "Rua Comercial, 789 - Centro",
    phone: "(16) 99999-9999",
  },
];

const links = [
  { label: "Empresa", href: "#empresa" },
  { label: "Produtos", href: "#produtos" },
  { label: "Ambientes", href: "#ambientes" },
  { label: "Contato", href: "#contato" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={apLogo} alt="AP Móveis" className="h-12 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Há mais de 35 anos transformando ambientes corporativos em espaços de sucesso. 
              Qualidade, design e ergonomia em cada detalhe.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stores */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-foreground mb-4">Nossas Lojas</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stores.map((store) => (
                <div key={store.city} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <MapPin className="w-4 h-4" />
                    {store.city}
                  </div>
                  <p className="text-muted-foreground text-sm">{store.address}</p>
                  <a
                    href={`tel:${store.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {store.phone}
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contato@apmoveis.com.br" className="hover:text-primary transition-colors">
                  contato@apmoveis.com.br
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} AP Móveis. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Desenvolvido com ❤️ para transformar escritórios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
