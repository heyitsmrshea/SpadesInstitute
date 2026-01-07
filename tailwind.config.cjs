/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'spades-paper': '#fbfbf7',
        'spades-wash': '#f3f4f6',
        'spades-ink': '#0b0d12',
        'spades-muted': '#5b6472',
        'spades-border': '#e6e8ee',
        'spades-primary': '#0b0d12',
        'spades-signal': '#111827'
      },
      boxShadow: {
        card: '0 18px 40px rgba(15, 23, 42, 0.12)'
      },
      borderRadius: {
        xl: '1.25rem'
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif']
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(30px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        flagWave: {
          '0%, 100%': { transform: 'perspective(800px) rotateX(3deg) rotateY(-2deg)' },
          '50%': { transform: 'perspective(800px) rotateX(-2deg) rotateY(2deg)' }
        },
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        bounceIn: {
          '0%': { opacity: 0, transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 600ms ease-out both',
        fadeIn: 'fadeIn 500ms ease-out both',
        fadeInLeft: 'fadeInLeft 600ms ease-out both',
        fadeInRight: 'fadeInRight 600ms ease-out both',
        scaleIn: 'scaleIn 500ms ease-out both',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        flagWave: 'flagWave 6s ease-in-out infinite',
        slideDown: 'slideDown 400ms ease-out both',
        bounceIn: 'bounceIn 600ms ease-out both'
      },
      spacing: {
        '9': '2.25rem',
        '13': '3.25rem',
        '15': '3.75rem'
      }
    }
  },
  plugins: []
};
