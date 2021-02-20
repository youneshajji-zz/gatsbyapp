const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // 'false' or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Axiforma", "Arial", "sans-serif"],
      },
      colors: {
        tomato: {
          50: "#fcf8f5",
          100: "#fceeeb",
          200: "#fad4d6",
          300: "#f9b0b1",
          400: "#fa7d79",
          500: "#fa524c",
          600: "#f43333",
          700: "#da2011",
          800: "#af202c",
          900: "#8d1b25",
        },
        seagreen: {
          50: "#f8fbfa",
          100: "#f2f9f3",
          200: "#dff0de",
          300: "#c2e1c2",
          400: "#87c591",
          500: "#4da45d",
          600: "#34803c",
          700: "#2d6433",
          800: "#254b2d",
          900: "#1e3a27",
        },
        orange: {
          50: "#f9f7e9",
          100: "#faf2c5",
          200: "#f6e984",
          300: "#f0d73f",
          400: "#e9c03c",
          500: "#db9a07",
          600: "#c47604",
          700: "#a15908",
          800: "#80450d",
          900: "#67370f",
        },
        limegreen: {
          50: "#f7faf6",
          100: "#f0f9e9",
          200: "#dcf3c3",
          300: "#bbe790",
          400: "#73d24d",
          500: "#39b823",
          600: "#299916",
          700: "#287918",
          800: "#245c1b",
          900: "#1e481a",
        },
        steel: {
          50: "#f2f7f8",
          100: "#e7f3f5",
          200: "#d1ebf2",
          300: "#a8d5e1",
          400: "#6db8d2",
          500: "#4093c0",
          600: "#3271a6",
          700: "#315887",
          800: "#2c4567",
          900: "#263952",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    // TOOD : Tailwind UI config https://emortlock.github.io/tailwind-react-ui/#installation
    // require('tailwindcss/plugins/container')({}),
    // ...Object.keys(plugins).map(name => plugins[name]()),
  ],
}
