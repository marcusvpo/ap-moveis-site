import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import EnvironmentsSection from "@/components/EnvironmentsSection";
import MainLayout from "@/components/layout/MainLayout";

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <EnvironmentsSection />
    </MainLayout>
  );
};

export default Index;
