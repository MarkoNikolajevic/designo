import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      grey: {
        100: '#F1F3F5',
        900: '#333136',
      },
      peach: {
        100: '#FFAD9B',
        500: '#E7816B',
      },
    },
    extend: {
      fontSize: {
        '4.5xl': ['2.5rem', {
          lineHeight: '3rem'
        }]
      },
      lineHeight: {
        '6.5': '1.625rem' // 26px,
      }
    }
  },
  plugins: [],
};
export default config;
