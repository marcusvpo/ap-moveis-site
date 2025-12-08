import { useIsMobile } from '@/hooks/use-mobile';

interface MorphingBlobProps {
  className?: string;
  color?: 'primary' | 'accent' | 'mixed';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  blur?: boolean;
  opacity?: number;
}

const sizeMap = {
  sm: 'w-24 h-24 md:w-32 md:h-32',
  md: 'w-36 h-36 md:w-48 md:h-48',
  lg: 'w-48 h-48 md:w-64 md:h-64',
  xl: 'w-64 h-64 md:w-96 md:h-96',
};

const MorphingBlob = ({
  className = '',
  color = 'primary',
  size = 'lg',
  blur = true,
  opacity = 0.3,
}: MorphingBlobProps) => {
  const isMobile = useIsMobile();
  
  const getGradient = () => {
    switch (color) {
      case 'primary':
        return 'from-primary/30 to-primary/20';
      case 'accent':
        return 'from-accent/30 to-accent/20';
      case 'mixed':
        return 'from-primary/30 to-accent/20';
      default:
        return 'from-primary/30 to-primary/20';
    }
  };

  // On mobile, render a simpler static blob
  if (isMobile) {
    return (
      <div
        className={`absolute bg-gradient-to-br ${getGradient()} ${sizeMap[size]} ${blur ? 'blur-2xl' : ''} rounded-full ${className}`}
        style={{ opacity: opacity * 0.6 }}
      />
    );
  }

  return (
    <div
      className={`absolute bg-gradient-to-br ${getGradient()} ${sizeMap[size]} ${blur ? 'blur-3xl' : ''} rounded-full animate-blob-slow ${className}`}
      style={{ opacity }}
    />
  );
};

export default MorphingBlob;
