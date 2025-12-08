import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import PromoBanner from "@/components/PromoBanner";
import MainLayout from "@/components/layout/MainLayout";

import banner02 from "@/assets/banners/banner-02.jpg";
import banner04 from "@/assets/banners/banner-04.jpg";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      
      {/* Banner promocional 1 */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <PromoBanner 
            image={banner02} 
            alt="Promoção AP Móveis - Móveis para escritório de qualidade" 
          />
        </div>
      </section>
      
      <ProductsSection />
      
      {/* Banner promocional 2 */}
      <section className="px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PromoBanner 
            image={banner04} 
            alt="Promoção AP Móveis - Qualidade e confiança" 
          />
        </div>
      </section>
      
      <EnvironmentsSection />
    </MainLayout>
  );
};

export default Index;
