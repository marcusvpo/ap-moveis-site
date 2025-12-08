import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          dark: "hsl(var(--primary-dark))",
          light: "hsl(var(--primary-light))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
          hover: "hsl(var(--accent-hover))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        glow: {
          primary: "hsl(var(--glow-primary))",
          accent: "hsl(var(--glow-accent))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": {
            transform: "scale(0.95)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsl(45 100% 51% / 0.4)",
          },
          "50%": { 
            boxShadow: "0 0 40px hsl(45 100% 51% / 0.7)",
          },
        },
        // NEW PREMIUM ANIMATIONS
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "shimmer-slow": {
          "0%": { transform: "translateX(-200%)" },
          "100%": { transform: "translateX(200%)" },
        },
        "aurora": {
          "0%": { 
            backgroundPosition: "50% 50%, 50% 50%",
            filter: "hue-rotate(0deg)",
          },
          "50%": { 
            backgroundPosition: "30% 70%, 70% 30%",
            filter: "hue-rotate(15deg)",
          },
          "100%": { 
            backgroundPosition: "50% 50%, 50% 50%",
            filter: "hue-rotate(0deg)",
          },
        },
        "mesh-float": {
          "0%, 100%": { 
            transform: "translate(0, 0) scale(1)",
            opacity: "0.5",
          },
          "33%": { 
            transform: "translate(30px, -30px) scale(1.1)",
            opacity: "0.7",
          },
          "66%": { 
            transform: "translate(-20px, 20px) scale(0.9)",
            opacity: "0.5",
          },
        },
        "blob-morph": {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "25%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "50%": {
            borderRadius: "50% 60% 30% 60% / 30% 40% 70% 50%",
          },
          "75%": {
            borderRadius: "60% 40% 50% 40% / 60% 50% 40% 60%",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px hsl(var(--primary) / 0.3), 0 0 40px hsl(var(--primary) / 0.1)",
          },
          "50%": {
            boxShadow: "0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.2)",
          },
        },
        "border-glow": {
          "0%, 100%": {
            borderColor: "hsl(var(--primary) / 0.3)",
          },
          "50%": {
            borderColor: "hsl(var(--primary) / 0.8)",
          },
        },
        "text-reveal": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
            filter: "blur(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "magnetic-pull": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(var(--magnetic-x, 0), var(--magnetic-y, 0))" },
        },
        "tilt-3d": {
          "0%, 100%": { transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" },
        },
        "wave": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-25%) translateY(2%)" },
          "50%": { transform: "translateX(-50%) translateY(0)" },
          "75%": { transform: "translateX(-25%) translateY(-2%)" },
          "100%": { transform: "translateX(0) translateY(0)" },
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5%)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-2px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(2px)" },
        },
        "page-enter": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px) scale(0.98)",
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
        },
        "page-exit": {
          "0%": { 
            opacity: "1",
            transform: "translateY(0) scale(1)",
          },
          "100%": { 
            opacity: "0",
            transform: "translateY(-20px) scale(0.98)",
          },
        },
        "slide-up-fade": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: "0", transform: "translateY(-40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-left-fade": {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-right-fade": {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-fade": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "blur-fade": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "rotate-fade": {
          "0%": { opacity: "0", transform: "rotate(-5deg) scale(0.95)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "100%" },
          "100%": { strokeDashoffset: "0%" },
        },
        "particle-float": {
          "0%, 100%": { 
            transform: "translateY(0) translateX(0) rotate(0deg)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { 
            transform: "translateY(-100vh) translateX(50px) rotate(720deg)",
            opacity: "0",
          },
        },
        "counter": {
          "0%": { "--num": "0" },
          "100%": { "--num": "var(--target)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "scale-in": "scale-in 0.3s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        // NEW PREMIUM ANIMATIONS
        "gradient-shift": "gradient-shift 8s ease infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        "gradient-y": "gradient-y 6s ease infinite",
        "shimmer": "shimmer 2s ease-in-out infinite",
        "shimmer-slow": "shimmer-slow 4s ease-in-out infinite",
        "aurora": "aurora 15s ease infinite",
        "mesh-float": "mesh-float 10s ease-in-out infinite",
        "blob-morph": "blob-morph 8s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "text-reveal": "text-reveal 0.8s ease-out forwards",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "magnetic-pull": "magnetic-pull 0.3s ease-out",
        "wave": "wave 20s ease-in-out infinite",
        "ripple": "ripple 0.6s ease-out",
        "spin-slow": "spin-slow 20s linear infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out",
        "page-enter": "page-enter 0.6s ease-out forwards",
        "page-exit": "page-exit 0.4s ease-in forwards",
        "slide-up-fade": "slide-up-fade 0.6s ease-out forwards",
        "slide-down-fade": "slide-down-fade 0.6s ease-out forwards",
        "slide-left-fade": "slide-left-fade 0.6s ease-out forwards",
        "slide-right-fade": "slide-right-fade 0.6s ease-out forwards",
        "scale-fade": "scale-fade 0.5s ease-out forwards",
        "blur-fade": "blur-fade 0.6s ease-out forwards",
        "rotate-fade": "rotate-fade 0.6s ease-out forwards",
        "draw-line": "draw-line 1s ease-out forwards",
        "particle-float": "particle-float 10s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
