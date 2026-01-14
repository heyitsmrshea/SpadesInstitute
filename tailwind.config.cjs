/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core brand colors
        'spades-paper': '#fbfbf7',
        'spades-wash': '#f3f4f6',
        'spades-ink': '#1f2937',           // Lightened from #0b0d12 for better balance
        'spades-ink-deep': '#0f172a',      // Deep navy for hero sections
        'spades-muted': '#4b5563',         // Better contrast (was #5b6472)
        'spades-muted-light': '#9ca3af',   // For dark backgrounds
        'spades-border': '#e5e7eb',
        // Primary accent - deep navy blue for CTAs and links
        'spades-accent': '#1e3a5f',
        'spades-accent-hover': '#0f2a4a',
        // Functional colors
        'spades-text': '#111827',          // High contrast body text
        'spades-text-secondary': '#374151' // Secondary text
      },
      fontSize: {
        // Body text hierarchy (larger, more readable)
        'body': ['1rem', { lineHeight: '1.6' }],       // 16px
        'body-lg': ['1.125rem', { lineHeight: '1.7' }], // 18px
        // Heading hierarchy
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],  // 20px
        'heading-md': ['1.5rem', { lineHeight: '1.35' }],  // 24px
        'heading-lg': ['1.875rem', { lineHeight: '1.3' }], // 30px
        'heading-xl': ['2.25rem', { lineHeight: '1.25' }], // 36px
        'heading-2xl': ['3rem', { lineHeight: '1.2' }],    // 48px
        'heading-3xl': ['3.75rem', { lineHeight: '1.1' }]  // 60px
      },
      boxShadow: {
        'card': '0 4px 20px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 12px 32px rgba(15, 23, 42, 0.12)',
        'card-lg': '0 18px 40px rgba(15, 23, 42, 0.12)',
        'focus': '0 0 0 3px rgba(30, 58, 95, 0.3)'
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem'
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        body: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Inter', 'sans-serif']
      },
      spacing: {
        '9': '2.25rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem'
      },
      maxWidth: {
        'prose': '65ch',      // Optimal reading width
        'prose-wide': '80ch'  // Wider reading width
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
        },
        // New animations for redesign
        blurReveal: {
          '0%': { opacity: 0, filter: 'blur(12px)', transform: 'translateY(20px)' },
          '100%': { opacity: 1, filter: 'blur(0)', transform: 'translateY(0)' }
        },
        revealUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        revealLeft: {
          '0%': { opacity: 0, transform: 'translateX(-40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        revealRight: {
          '0%': { opacity: 0, transform: 'translateX(40px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
        revealScale: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        },
        gridPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.07' }
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(30, 58, 95, 0)' },
          '50%': { boxShadow: '0 0 40px rgba(30, 58, 95, 0.15)' }
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        },
        shimmerSlide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
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
        bounceIn: 'bounceIn 600ms ease-out both',
        // New animations for redesign
        blurReveal: 'blurReveal 800ms ease-out both',
        revealUp: 'revealUp 700ms ease-out both',
        revealLeft: 'revealLeft 700ms ease-out both',
        revealRight: 'revealRight 700ms ease-out both',
        revealScale: 'revealScale 600ms ease-out both',
        gridPulse: 'gridPulse 4s ease-in-out infinite',
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        lineGrow: 'lineGrow 800ms ease-out both',
        shimmerSlide: 'shimmerSlide 600ms ease-out'
      }
    }
  },
  plugins: []
};
