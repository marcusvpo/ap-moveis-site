import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/layout/MainLayout";

import banner02 from "@/assets/banners/banner-02.jpg";
import banner04 from "@/assets/banners/banner-04.jpg";

// Lazy load non-critical sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const EnvironmentsSection = lazy(() => import("@/components/EnvironmentsSection"));
const PromoBanner = lazy(() => import("@/components/PromoBanner"));

// Loading skeleton
const SectionSkeleton = () => (
  <div className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="h-8 w-48 bg-muted animate-pulse rounded mb-8 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-64 bg-muted animate-pulse rounded-3xl" />
        ))}
      </div>
    </div>
  </div>
);

const BannerSkeleton = () => (
  <div className="px-4 md:px-8 lg:px-12 py-8 md:py-12">
    <div className="max-w-7xl mx-auto">
      <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/7] bg-muted animate-pulse rounded-2xl md:rounded-3xl" />
    </div>
  </div>
);

const Index = () => {
  return (
    <MainLayout>
      <HeroSection />
      
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Banner promocional 1 */}
      <Suspense fallback={<BannerSkeleton />}>
        <section className="px-3 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <PromoBanner
              image={banner02}
              alt="Promoção AP Móveis - Móveis para escritório de qualidade"
            />
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProductsSection />
      </Suspense>

      {/* Banner promocional 2 */}
      <Suspense fallback={<BannerSkeleton />}>
        <section className="px-3 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 bg-muted">
          <div className="max-w-7xl mx-auto">
            <PromoBanner
              image={banner04}
              alt="Promoção AP Móveis - Qualidade e confiança"
            />
          </div>
        </section>
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <EnvironmentsSection />
      </Suspense>
    </MainLayout>
  );
};

export default Index;
