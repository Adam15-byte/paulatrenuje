import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      pink: '#ffe1d6',
      orange: '#f88231',
      gray: '#9a9a9a',
      black: '#000',
      white: '#FFF',
      brown: '#d0aca3',
      red: '#ba0606',
      green: '#008000',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#f88231',
              foreground: '#FFF',
            },
            secondary: {
              DEFAULT: '#ffe1d6',
              foreground: '#FFF',
            },
            success: {
              DEFAULT: '#d3f4e1',
              foreground: '#13a150',
            },
            danger: {
              DEFAULT: '#f71616',
              foreground: '#f5296e',
            },
            focus: '#f88231',
          },
        },
      },
    }),
  ],
};
export default config;
