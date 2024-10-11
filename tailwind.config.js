/* Pinegrow generated Design Panel Begin */

const pg_colors = {
  gray: {
    '50': '#f9fafb',
    '100': '#f3f4f6',
    '200': '#e5e7eb',
    '300': '#d1d5db',
    '400': '#9ca3af',
    '500': '#6b7280',
    '600': '#4b5563',
    '700': '#374151',
    '800': '#1f2937',
    '900': '#111827',
  },
  red: {
    '50': '#fef2f2',
    '100': '#fee2e2',
    '200': '#fecaca',
    '300': '#fca5a5',
    '400': '#f87171',
    '500': '#ef4444',
    '600': '#dc2626',
    '700': '#b91c1c',
    '800': '#991b1b',
    '900': '#7f1d1d',
  },
  yellow: {
    '50': '#fffbeb',
    '100': '#fef3c7',
    '200': '#fde68a',
    '300': '#fcd34d',
    '400': '#fbbf24',
    '500': '#f59e0b',
    '600': '#d97706',
    '700': '#b45309',
    '800': '#92400e',
    '900': '#78350f',
  },
  green: {
    '50': '#ecfdf5',
    '100': '#d1fae5',
    '200': '#a7f3d0',
    '300': '#6ee7b7',
    '400': '#34d399',
    '500': '#10b981',
    '600': '#059669',
    '700': '#047857',
    '800': '#065f46',
    '900': '#064e3b',
  },
  blue: {
    '50': '#eff6ff',
    '100': '#dbeafe',
    '200': '#bfdbfe',
    '300': '#93c5fd',
    '400': '#60a5fa',
    '500': '#3b82f6',
    '600': '#2563eb',
    '700': '#1d4ed8',
    '800': '#1e40af',
    '900': '#1e3a8a',
  },
  indigo: {
    '50': '#eef2ff',
    '100': '#e0e7ff',
    '200': '#c7d2fe',
    '300': '#a5b4fc',
    '400': '#818cf8',
    '500': '#6366f1',
    '600': '#4f46e5',
    '700': '#4338ca',
    '800': '#3730a3',
    '900': '#312e81',
  },
  purple: {
    '50': '#f5f3ff',
    '100': '#ede9fe',
    '200': '#ddd6fe',
    '300': '#c4b5fd',
    '400': '#a78bfa',
    '500': '#8b5cf6',
    '600': '#7c3aed',
    '700': '#6d28d9',
    '800': '#5b21b6',
    '900': '#4c1d95',
  },
  pink: {
    '50': '#fdf2f8',
    '100': '#fce7f3',
    '200': '#fbcfe8',
    '300': '#f9a8d4',
    '400': '#f472b6',
    '500': '#ec4899',
    '600': '#db2777',
    '700': '#be185d',
    '800': '#9d174d',
    '900': '#831843',
  },
  primary: {
    '50': '#f4edeb',
    '100': '#ebcdbd',
    '200': '#dfad90',
    '300': '#d08e65',
    '400': '#be6f3b',
    '500': '#aa510b',
    '600': '#98480a',
    '700': '#864009',
    '800': '#753808',
    '900': '#653007',
  },
  secondary: {
    '50': '#f1eceb',
    '100': '#e2c6ba',
    '200': '#d0a08b',
    '300': '#bc7c5e',
    '400': '#a55932',
    '500': '#8b3504',
    '600': '#7c2f05',
    '700': '#6e2a05',
    '800': '#602504',
    '900': '#521f02',
  },
  'color3': {
    '50': '#faf7f2',
    '100': '#f5eedf',
    '200': '#f0e4cd',
    '300': '#eadaba',
    '400': '#e4d0a8',
    '500': '#dec796',
    '600': '#c7b286',
    '700': '#b09d77',
    '800': '#998968',
    '900': '#837659',
  },
  'color4': {
    '50': '#f4efed',
    '100': '#e8d5ca',
    '200': '#dabba9',
    '300': '#cba188',
    '400': '#bc8869',
    '500': '#ab704a',
    '600': '#996442',
    '700': '#87593b',
    '800': '#764d33',
    '900': '#65422c',
  },
}

const pg_fonts = {
  sans: ["'Proza Libre', sans-serif",
  ],
  serif: ["'Caveat Brush', sans-serif",
  ],
}

const pg_backgrounds = {
  'design-image': "url('https://images.unsplash.com/photo-1712725214797-38956dc3f091?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGNhZmUlMjBjYWtlfGVufDB8fHx8MTcyODYxMDcyOHww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=1200&fit=max')",
  'design-image-large': "url('https://images.unsplash.com/photo-1712725214797-38956dc3f091?ixid=M3wyMDkyMnwwfDF8c2VhcmNofDF8fGNhZmUlMjBjYWtlfGVufDB8fHx8MTcyODYxMDcyOHww&ixlib=rb-4.0.3q=85&fm=jpg&crop=faces&cs=srgb&w=2000&fit=max')",
}


/* Pinegrow generated Design Panel End */

export default {
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/forms'),
  ],

  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    extend: {
      boxShadow: {
        rainbow:
          '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
      },
      colors: {
        ...pg_colors, // primary, secondary etc
        blue: {
          100: '#72c1df',
          200: '#5bb7d9',
          300: '#43add4',
          400: '#2ca2ce',
          500: '#1498c9',
          600: '#1289b5',
          700: '#107aa1',
          800: '#0e6a8d',
          900: '#0c5b79',
        },
        gold: {
          light: '#ddbf5f',
          base: '#d4af37',
          dark: '#aa8c2c',
        },
      },
      fontFamily: pg_fonts,
      backgroundImage: pg_backgrounds, // bg-design-image, bg-design-image-large
    },
  },

  corePlugins: {
    get preflight() {
      return !process.env.WP
    },
  },

  /* Please ensure that you update the filenames and paths to accurately match those used in your project. */
  get content() {
    let _content = [
      './index.html',
      './src/**/*.{html,vue,svelte,astro,js,cjs,mjs,ts,cts,mts,jsx,tsx,md,mdx}',
    ]
    return {
      relative: true, // IMPORTANT
      files:
        process.env.NODE_ENV === 'production'
          ? _content
          : [..._content, './_pginfo/**/*.{html,js}'], // used by Pinegrow for live-designing during development
    }
  },
}
