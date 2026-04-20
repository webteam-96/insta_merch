/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#833AB4",
          "purple-dark": "#5B2D91",
          magenta: "#C13584",
          pink: "#E1306C",
          "pink-light": "#FDE7EE",
          "pink-hover": "#C8295E",
          red: "#FD1D1D",
          orange: "#F77737",
          "orange-light": "#FDEDDC",
          yellow: "#FCAF45",
          danger: "#ef4444",
          "danger-light": "rgba(239, 68, 68, 0.08)",
          cream: "#FFF8F2",
          blush: "#FCE7F3",
        },
        ink: {
          DEFAULT: "#0a0a0a",
          gray50: "#f9fafb",
          gray100: "#f3f4f6",
          gray200: "#e5e7eb",
          gray400: "#6b7280",
          gray600: "#4b5563",
          gray800: "#1f2937",
        },
      },
      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "14px",
        lg: "20px",
        xl: "28px",
        pill: "100px",
      },
      backgroundImage: {
        "ig-gradient":
          "linear-gradient(135deg, #833AB4 0%, #C13584 30%, #E1306C 55%, #FD1D1D 75%, #F77737 100%)",
        "ig-gradient-soft":
          "linear-gradient(135deg, rgba(131,58,180,0.08) 0%, rgba(225,48,108,0.08) 50%, rgba(247,119,55,0.08) 100%)",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)",
        DEFAULT:
          "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)",
        lg: "0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05)",
        brand: "0 8px 32px rgba(225, 48, 108, 0.25)",
        "brand-cta": "0 4px 20px rgba(225, 48, 108, 0.35)",
        "brand-cta-hover": "0 10px 34px rgba(225, 48, 108, 0.55)",
        glow: "0 0 40px rgba(225, 48, 108, 0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-ring": {
          "0%": {
            transform: "scale(0.97)",
            boxShadow: "0 0 0 0 rgba(225, 48, 108, 0.4)",
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 14px rgba(225, 48, 108, 0)",
          },
          "100%": { transform: "scale(0.97)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-20px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        blob: {
          "0%,100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        "gradient-shift": {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "marquee-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spark-twinkle": {
          "0%,100%": { opacity: "0.2", transform: "scale(0.6)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
        "bounce-subtle": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out both",
        "scale-in": "scale-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        "pulse-ring": "pulse-ring 2.5s infinite",
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 12s ease-in-out infinite",
        blob: "blob 14s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "gradient-shift": "gradient-shift 6s ease infinite",
        "rotate-slow": "rotate-slow 10s linear infinite",
        "marquee-x": "marquee-x 22s linear infinite",
        "spark-twinkle": "spark-twinkle 2.2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
