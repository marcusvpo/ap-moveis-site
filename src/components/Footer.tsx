import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock } from "lucide-react";
import logoAp from "@/assets/logo-ap.png";

const stores = [
  {
    city: "Jaboticabal",
    address: "Rua São Sebastião, 122 - Centro",
    phone: "(16) 3202-7022",
  },
  {
    city: "Monte Alto",
    address: "Rua Nhonho do Livramento, 2155 - Centro",
    phone: "(16) 3241-1280",
  },
  {
    city: "Bebedouro",
    address: "Av. Edne José Piffer, 561 - Res. Hércules Hortal",
    phone: "(17) 3044-6063",
  },
];

const links = [
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/contato" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-card border-t border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-64 md:w-96 h-64 md:h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src={logoAp} alt="AP Móveis" className="h-10 md:h-12 mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed">
              Há mais de 35 anos transformando ambientes corporativos em espaços de sucesso. 
              Qualidade, design e ergonomia em cada detalhe.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
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
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stores.map((store) => (
                <div key={store.city} className="space-y-2">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {store.city}
                  </div>
                  <p className="text-muted-foreground text-sm leading-tight">{store.address}</p>
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

            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span>Seg - Sex: 8h às 18h | Sáb: 8h às 12h</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contato@apmoveis.com.br" className="hover:text-primary transition-colors">
                  contato@apmoveis.com.br
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} AP Móveis. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs text-center md:text-right">
            Desenvolvido com ❤️ para transformar escritórios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
