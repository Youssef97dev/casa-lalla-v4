/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary_1: "var(--casa-primary)",
        primary_2: "var(--casa-secondary)",
        primary_3: "var(--casa-thirdly)",
      },
    },
  },
  plugins: [],
};
