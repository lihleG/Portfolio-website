/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],      // 12px
        sm: ['0.85rem', { lineHeight: '1.3rem' }],    // 13.6px
        base: ['0.95rem', { lineHeight: '1.6rem' }],  // 15.2px
        lg: ['1.05rem', { lineHeight: '1.8rem' }],    // 16.8px
        xl: ['1.25rem', { lineHeight: '1.9rem' }],    // 20px
        '2xl': ['1.5rem', { lineHeight: '2.1rem' }],  // 24px
        '3xl': ['1.75rem', { lineHeight: '2.2rem' }], // 28px
        '4xl': ['2rem', { lineHeight: '2.4rem' }],    // 32px
        '5xl': ['2.5rem', { lineHeight: '2.8rem' }],  // 40px
        '6xl': ['3rem', { lineHeight: '1' }],         // 48px
      },
    },
  },
  plugins: [],
}
