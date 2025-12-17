import { lazy, Suspense } from "react";
import HeroSection from "@/components/HeroSection";
import MainLayout from "@/components/layout/MainLayout";

import bannerPromo1Desktop from "@/assets/banners_desktop/banner-qualidade-desktop.jpg";
import bannerPromo1Mobile from "@/assets/banners_mobile/banner-qualidade-mobile.png";
import bannerPromo2Desktop from "@/assets/banners_desktop/banner-escritorio-desktop.jpg";
import bannerPromo2Mobile from "@/assets/banners_mobile/banner-escritorio-mobile.png";

// Lazy load non-critical sections
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ProductsSection = lazy(() => import("@/components/ProductsSection"));
const EnvironmentsSection = lazy(
  () => import("@/components/EnvironmentsSection")
);
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
  <div className="px-3 sm:px-4 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
    <div className="max-w-7xl mx-auto">
      <div className="aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8] bg-muted animate-pulse rounded-xl sm:rounded-2xl md:rounded-3xl" />
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
              imageMobile={bannerPromo1Mobile}
              imageDesktop={bannerPromo1Desktop}
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
              imageMobile={bannerPromo2Mobile}
              imageDesktop={bannerPromo2Desktop}
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
