/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/container/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: '#3490dc', // Example primary color
        secondary: '#ffed4a', // Example secondary color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
