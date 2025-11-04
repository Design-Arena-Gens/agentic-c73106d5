/************************************************************
 Tailwind config with semantic design tokens via CSS variables
*************************************************************/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ui: ['var(--font-ui)', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'var(--font-ui)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary) / <alpha-value>)',
          foreground: 'hsl(var(--color-primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary) / <alpha-value>)',
          foreground: 'hsl(var(--color-secondary-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-accent) / <alpha-value>)',
          foreground: 'hsl(var(--color-accent-foreground) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'hsl(var(--color-surface) / <alpha-value>)',
          foreground: 'hsl(var(--color-surface-foreground) / <alpha-value>)',
        },
        background: 'hsl(var(--color-background) / <alpha-value>)',
        neutral: {
          50: 'hsl(var(--color-neutral-50) / <alpha-value>)',
          100: 'hsl(var(--color-neutral-100) / <alpha-value>)',
          200: 'hsl(var(--color-neutral-200) / <alpha-value>)',
          300: 'hsl(var(--color-neutral-300) / <alpha-value>)',
          400: 'hsl(var(--color-neutral-400) / <alpha-value>)',
          500: 'hsl(var(--color-neutral-500) / <alpha-value>)',
          600: 'hsl(var(--color-neutral-600) / <alpha-value>)',
          700: 'hsl(var(--color-neutral-700) / <alpha-value>)',
          800: 'hsl(var(--color-neutral-800) / <alpha-value>)',
          900: 'hsl(var(--color-neutral-900) / <alpha-value>)',
        },
      },
      boxShadow: {
        soft: '0 4px 20px hsl(var(--color-neutral-900) / 0.06)',
        ring: '0 0 0 1px hsl(var(--color-neutral-900) / 0.06) inset',
      },
      borderRadius: {
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
      },
      spacing: {
        safe: 'clamp(8px, 3vw, 12px)',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        ':root': {
          /* Primary token from user-provided hex (#FF5A5F) converted to HSL */
          '--color-primary': '358 100% 67%',
          '--color-primary-foreground': '0 0% 100%',

          /* Semantic tokens - no hex values used */
          '--color-secondary': '358 90% 60%',
          '--color-secondary-foreground': '0 0% 100%',

          '--color-accent': '358 100% 72%',
          '--color-accent-foreground': '0 0% 100%',

          '--color-surface': '0 0% 100%',
          '--color-surface-foreground': '0 0% 12%',

          '--color-background': '0 0% 99%',

          /* Neutral scale (grays) in HSL, no hex) */
          '--color-neutral-50': '0 0% 99%',
          '--color-neutral-100': '0 0% 96%',
          '--color-neutral-200': '0 0% 92%',
          '--color-neutral-300': '0 0% 86%',
          '--color-neutral-400': '0 0% 70%',
          '--color-neutral-500': '0 0% 55%',
          '--color-neutral-600': '0 0% 45%',
          '--color-neutral-700': '0 0% 35%',
          '--color-neutral-800': '0 0% 20%',
          '--color-neutral-900': '0 0% 10%',
        },
      });
    },
  ],
};
