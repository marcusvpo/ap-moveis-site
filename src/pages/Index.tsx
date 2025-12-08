import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        
        {/* Placeholder for next sections */}
        <section id="empresa" className="min-h-screen bg-secondary flex items-center justify-center">
          <h2 className="text-4xl font-bold text-foreground">Seção Empresa (Em breve)</h2>
        </section>
        
        <section id="produtos" className="min-h-screen bg-background flex items-center justify-center">
          <h2 className="text-4xl font-bold text-foreground">Seção Produtos (Em breve)</h2>
        </section>
        
        <section id="ambientes" className="min-h-screen bg-secondary flex items-center justify-center">
          <h2 className="text-4xl font-bold text-foreground">Seção Ambientes (Em breve)</h2>
        </section>
        
        <section id="contato" className="min-h-screen bg-foreground flex items-center justify-center">
          <h2 className="text-4xl font-bold text-background">Seção Contato (Em breve)</h2>
        </section>
      </main>
    </div>
  );
};

export default Index;
