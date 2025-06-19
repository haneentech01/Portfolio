/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter-sans)"],
        oswald: ["var(--font-oswald-mono)"],
      },

      colors: {
        primaryBlue: "#001F3F", // Primary Blue
        blueLight: "#0D47A1", //Light Blue
        babyBlue: "#A8BBDA", //Baby Blue
        primaryYallow: "#FAD405", // Yallow
        backgroundBlue: "#EBEFFA", // Background Blue
        darkGray: "#C6C8CC", // Dark Gray
        lightGray: "#E0E0E0", // Light Gray
        hoverBlueLight: "#165b9e",
        hoverPrimaryBlue: "#01294f",
      },

      screens: {
        sm: "300px",
        md: "768px",
        lg: "900px",
        xl: "1280px",
      },

      animation: {
        "spin-slow": "spin 1s linear infinite",
      },
    },
  },
  plugins: [],
};
