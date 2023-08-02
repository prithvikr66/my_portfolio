/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Noto_sans: ["Noto Sans", "sans-serif"]
      },
      colors: {
        bodyColor: "#0A192F",
        textBlue: "#007DF0",
        hoverColor: "#092332"
      }

    },
  },
  plugins: [],
}
