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
        primary: '#146C94', // Example primary color
        "primary-lite": '#AFD3E2', // Example primary color
        secondary: '#F6F1F1', // Example secondary color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
}
