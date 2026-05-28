/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          // Identidade visual oficial — CLAUDE.md
          white:     '#F8F6F2',   // branco principal
          cream:     '#F8F6F2',   // alias
          beige:     '#E8DFD3',   // bege apoio
          gold:      '#C6A16E',   // dourado
          champagne: '#C6A16E',   // alias
          gray:      '#B8B2AA',   // cinza elegante
          black:     '#111111',   // preto
          charcoal:  '#111111',   // alias
          // Tons complementares
          ivory:     '#F2EDE6',
          sand:      '#E8DFD3',
          linen:     '#D4C9B8',
          bronze:    '#A07848',
          onyx:      '#1C1C1C',
          noir:      '#0A0A0A',
        },
      },
      fontFamily: {
        // Tipografia oficial — CLAUDE.md
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        serif:   ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs':  ['0.625rem', { lineHeight: '1rem' }],
        '10xl': ['10rem',    { lineHeight: '1' }],
        '12xl': ['12rem',    { lineHeight: '1' }],
      },
      letterSpacing: {
        'ultra': '0.35em',
        'wide2': '0.2em',
        'wide3': '0.15em',
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1.2s ease forwards',
        'slide-left': 'slideLeft 0.8s ease forwards',
        'shimmer':    'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideLeft: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'silk':   'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400':  '400ms',
        '600':  '600ms',
        '800':  '800ms',
        '1200': '1200ms',
      },
      backgroundImage: {
        'gradient-aura': 'linear-gradient(135deg, #F8F6F2 0%, #EDE7DC 50%, #E8DFD3 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6A16E 0%, #A07848 100%)',
        'gradient-noir': 'linear-gradient(180deg, #0A0A0A 0%, #1C1C1C 100%)',
      },
      aspectRatio: {
        '3/4':  '3 / 4',
        '4/5':  '4 / 5',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}
