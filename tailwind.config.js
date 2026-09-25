/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Single dark theme by design — grading suite mood
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: '#f5223b',
        },
        'accent-2': {
          DEFAULT: 'var(--accent-2)',
          hover: '#dfb73a',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Manrope', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Dancing Script"', 'cursive'],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        xl: '4px',
      },
      boxShadow: {
        none: 'none',
        'glow-crimson': '0 0 25px rgba(227, 18, 42, 0.35)',
        'glow-gold': '0 0 25px rgba(201, 162, 39, 0.35)',
      },
      keyframes: {
        'grade-wash': {
          '0%': { filter: 'grayscale(100%) contrast(120%) brightness(0.9)' },
          '100%': { filter: 'grayscale(0%) contrast(100%) brightness(1)' },
        },
        'scanline-drift': {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glitch-anim': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        'grade-wash': 'grade-wash 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scanline': 'scanline-drift 8s linear infinite',
        'glitch': 'glitch-anim 0.3s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
