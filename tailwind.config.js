/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#1a1a2e',
        'secondary-bg': '#202040',
        'accent-1': '#00f5c3',
        'accent-2': '#e94560',
        'accent-hover': '#26ffe3',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0b0',
        'tag-bg': '#263859',
        'tag-hover': '#00f5c3',
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 6px 28px rgba(0, 255, 195, 0.2)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a2e, #121233)',
      },
      animation: {
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: {
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
};
