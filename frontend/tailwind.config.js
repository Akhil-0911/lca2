/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
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
      colors: {
        border: "var(--color-border)", // gray-200
        input: "var(--color-input)", // white
        ring: "var(--color-ring)", // deep forest green
        background: "var(--color-background)", // warm white
        foreground: "var(--color-foreground)", // rich charcoal
        primary: {
          DEFAULT: "var(--color-primary)", // deep forest green
          foreground: "var(--color-primary-foreground)", // white
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // balanced mid-tone green
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // clear red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // soft gray-green
          foreground: "var(--color-muted-foreground)", // professional medium gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // warm amber
          foreground: "var(--color-accent-foreground)", // rich charcoal
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // rich charcoal
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // rich charcoal
        },
        success: {
          DEFAULT: "var(--color-success)", // vibrant green
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // earthy orange
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // clear red
          foreground: "var(--color-error-foreground)", // white
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans 3', 'sans-serif'],
        'caption': ['Inter', 'sans-serif'],
        'data': ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-in": {
          from: { transform: "translateY(-10px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.15s ease-out",
        "slide-in": "slide-in 0.2s ease-out",
      },
      boxShadow: {
        'earth': '0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'earth-md': '0 4px 6px -1px rgba(0, 0, 0, 0.10), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'earth-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '150': '150ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}