import { ReactNode } from 'react';
import { NavigationProvider } from '@/components/navigation/NavigationContext';
import NavigationOrb from '@/components/navigation/NavigationOrb';
import FullscreenMenu from '@/components/navigation/FullscreenMenu';
import TopBar from '@/components/navigation/TopBar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageTransition from '@/components/navigation/PageTransition';

interface MainLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const MainLayout = ({ children, showFooter = true }: MainLayoutProps) => {
  return (
    <NavigationProvider>
      <div className="min-h-screen bg-background">
        <TopBar />
        <FullscreenMenu />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        {showFooter && <Footer />}
        <WhatsAppButton />
        <NavigationOrb />
      </div>
    </NavigationProvider>
  );
};

export default MainLayout;
