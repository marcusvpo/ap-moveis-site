import { ReactNode, useMemo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

type BackgroundType = 'aurora' | 'mesh' | 'particles' | 'waves' | 'geometric' | 'gradient';

interface AnimatedBackgroundProps {
  children?: ReactNode;
  type?: BackgroundType;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
  primaryColor?: string;
  accentColor?: string;
}

const AnimatedBackground = ({
  children,
  type = 'aurora',
  className = '',
  intensity = 'medium',
  primaryColor = 'primary',
  accentColor = 'accent',
}: AnimatedBackgroundProps) => {
  const isMobile = useIsMobile();
  
  const opacityMap = {
    low: 0.25,
    medium: 0.4,
    high: 0.6,
  };

  const opacity = opacityMap[intensity];

  // Simplified static background for better performance
  const renderBackground = () => {
    // On mobile, use simpler static backgrounds
    if (isMobile) {
      return (
        <div
          className="absolute inset-0"
          style={{
            opacity: opacity * 0.7,
            background: `
              radial-gradient(ellipse at 30% 30%, hsl(var(--${primaryColor}) / 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 70%, hsl(var(--${accentColor}) / 0.15) 0%, transparent 50%)
            `,
          }}
        />
      );
    }

    switch (type) {
      case 'aurora':
        return (
          <>
            <div
              className="absolute inset-0 animate-aurora"
              style={{
                opacity,
                background: `
                  radial-gradient(ellipse at 20% 30%, hsl(var(--${primaryColor}) / 0.3) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 70%, hsl(var(--${accentColor}) / 0.2) 0%, transparent 50%)
                `,
              }}
            />
            <div
              className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full blur-3xl animate-blob-slow"
              style={{
                background: `hsl(var(--${primaryColor}) / 0.15)`,
              }}
            />
          </>
        );

      case 'mesh':
        return (
          <div
            className="absolute inset-0"
            style={{
              opacity,
              background: `
                radial-gradient(at 40% 20%, hsl(var(--${primaryColor}) / 0.25) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsl(var(--${accentColor}) / 0.15) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsl(var(--${primaryColor}) / 0.15) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsl(var(--${accentColor}) / 0.1) 0px, transparent 50%)
              `,
            }}
          />
        );

      case 'gradient':
        return (
          <div
            className="absolute inset-0 animate-gradient-slow"
            style={{
              opacity,
              background: `linear-gradient(135deg, 
                hsl(var(--${primaryColor}) / 0.15) 0%, 
                hsl(var(--${accentColor}) / 0.1) 50%, 
                hsl(var(--${primaryColor}) / 0.15) 100%)`,
              backgroundSize: '200% 200%',
            }}
          />
        );

      default:
        return (
          <div
            className="absolute inset-0"
            style={{
              opacity,
              background: `
                radial-gradient(at 30% 30%, hsl(var(--${primaryColor}) / 0.2) 0px, transparent 50%),
                radial-gradient(at 70% 70%, hsl(var(--${accentColor}) / 0.15) 0px, transparent 50%)
              `,
            }}
          />
        );
    }
  };

  if (!children) {
    return <div className={`absolute inset-0 ${className}`}>{renderBackground()}</div>;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {renderBackground()}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;
