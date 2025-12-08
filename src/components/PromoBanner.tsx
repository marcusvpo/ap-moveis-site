import ProgressiveImage from './ProgressiveImage';

interface PromoBannerProps {
  image: string;
  alt: string;
  className?: string;
}

const PromoBanner = ({ image, alt, className = '' }: PromoBannerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl ${className}`}
    >
      <div className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/8]">
        <ProgressiveImage
          src={image}
          alt={alt}
          className="w-full h-full"
          imgClassName="object-contain sm:object-cover object-center"
        />
      </div>
    </div>
  );
};

export default PromoBanner;
