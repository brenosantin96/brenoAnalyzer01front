import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'bg-login-background': "url('/assets/bgloginpagez.svg')",
      },
      fontSize: {
        'xxs': ['10px', {
          lineHeight: '10px',
          letterSpacing: '0.1px',
          fontWeight: '400',
        }],
      },
      colors: {

        'ice-dark-blue': '#13293d',
        'ice-blue': '#006494',
        'ice-greenblue': '#247ba0',
        'ice-lightblue': '#1b98e0',
        'ice-white': '#e8f1f2',
        'ice-graybackground': '#A3BAC3',
        'grey-table' : '#EDEDED'

      },
      fontFamily: {
        'arial': ['Arial', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'golos': ['Golos Text', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      boxShadow:
      {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
