import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <EnvironmentsSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
