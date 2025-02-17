// filepath: /tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: { fontSize: '2.5rem' },
            h2: { fontSize: '2rem' },
            h3: { fontSize: '1.75rem' },
            h4: { fontSize: '1.5rem' },
            // ...add other customizations
          },
        },
      },
      colors: {
        primary: {
          1: "var(--clr-primary-1)",
          2: "var(--clr-primary-2)",
          3: "var(--clr-primary-3)",
        },
        secondary: {
          1: "var(--clr-secondary-1)",
          2: "var(--clr-secondary-2)",
        },
        blue: {
          1: "var(--clr-blue-1)",
          2: "var(--clr-blue-2)",
          3: "var(--clr-blue-3)",
          4: "var(--clr-blue-4)",
        }
      },
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
      spacing: {
        DEFAULT: "var(--spacing)",
      },
      fontSize: {
        700: "var(--ff-700)",
        600: "var(--ff-600)",
        500: "var(--ff-500)",
        400: "var(--ff-400)",
        300: "var(--ff-300)",
      }
    },
  },
  plugins: [],
}