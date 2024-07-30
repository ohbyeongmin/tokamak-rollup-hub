/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "custom-blue": "rgba(49, 131, 255, 0.25)",
      },
      colors: {
        "tokamak-blue": "#0070ED",
        "button-border-gray": "#1D2838",
        "button-text-gray": "#C1C2D9",
        "copyright-gray": "#616D7E",
        "optimism-red": "#FF0420",
        "zeroknowledge-green": "#06D863",
        "tokamak-blue-hover": "#0057E6",
        "card-background": "#0E131B",
      },
    },
  },
  fontFamily: {
    sans: ['"Proxima Nova"', ...defaultTheme.fontFamily.sans],
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
