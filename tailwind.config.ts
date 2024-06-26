/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['var(--font-manrope)'],
        bebas: ['var(--font-bebas-neue)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'primary' : '#1a2c38',
        'primary-blue' : '#5AB2FF',
        'primary-green' : '#9CFF2E',
        'primary-two' : '#213744',
        'secondary' : '#0f212e',
        'secondary-two' : '#2f4553',
      }
    },
  },
  plugins: [],
};
