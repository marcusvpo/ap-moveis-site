import ProgressiveImage from "./ProgressiveImage";

interface PromoBannerProps {
  image?: string;
  imageMobile?: string;
  imageDesktop?: string;
  alt: string;
  className?: string;
}

const PromoBanner = ({
  image,
  imageMobile,
  imageDesktop,
  alt,
  className = "",
}: PromoBannerProps) => {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl ${className}`}
    >
      {imageMobile && imageDesktop ? (
        <picture>
          <source media="(min-width: 768px)" srcSet={imageDesktop} />
          <img
            src={imageMobile}
            alt={alt}
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </picture>
      ) : (
        <ProgressiveImage
          src={image}
          alt={alt}
          className="w-full"
          imgClassName="w-full h-auto object-contain"
        />
      )}
    </div>
  );
};

export default PromoBanner;
