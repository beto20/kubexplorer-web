/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Kubexplorer "Kubernetes Blue" brand palette
        primary: {
          DEFAULT: "#326CE5", // k8s blue — buttons, links, highlights
          50: "#EEF3FD",
          100: "#D9E5FB",
          200: "#B3CAF6",
          300: "#8DAFF1",
          400: "#5C8BEB",
          500: "#326CE5",
          600: "#1F54C4",
          700: "#1A45A0",
          800: "#173B85",
          900: "#15326E",
        },
        accent: {
          DEFAULT: "#00B8D9", // cyan — secondary accents
          500: "#00B8D9",
        },
        ink: "#0B1B34", // deep navy — primary text
        surface: "#F4F7FB", // cool light — section backgrounds
        muted: "#5A6B85", // slate — secondary text
      },
      fontFamily: {
        sans: [
          "Bricolage Grotesque Variable",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
