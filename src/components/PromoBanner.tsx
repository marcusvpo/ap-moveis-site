import { motion } from 'framer-motion';
import ProgressiveImage from './ProgressiveImage';

interface PromoBannerProps {
  image: string;
  alt: string;
  className?: string;
}

const PromoBanner = ({ image, alt, className = '' }: PromoBannerProps) => {
  return (
    <motion.div
      className={`relative w-full overflow-hidden rounded-2xl md:rounded-3xl ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/7] overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        <ProgressiveImage
          src={image}
          alt={alt}
          className="w-full h-full"
          imgClassName="object-cover object-center"
        />
        {/* Subtle overlay for better visual integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    </motion.div>
  );
};

export default PromoBanner;
