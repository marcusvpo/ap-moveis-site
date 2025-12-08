import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ElementType } from "react";

interface ShimmerTextProps {
  text: string;
  className?: string;
  as?: ElementType;
}

export default function ShimmerText({
  text,
  className,
  as: Component = "span",
}: ShimmerTextProps) {
  return (
    <motion.span
      className="relative overflow-hidden inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Component
        className={cn(
          "font-bold bg-gradient-to-r from-primary-foreground via-primary-foreground/60 to-primary-foreground bg-[length:200%_100%] bg-clip-text text-transparent",
          className
        )}
        style={{
          animation: "shimmer-text 2.5s linear infinite",
        }}
      >
        {text}
      </Component>
    </motion.span>
  );
}
