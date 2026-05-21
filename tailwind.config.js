/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",

        muted: {
          DEFAULT: "#6b7280",
          light: "#9ca3af"
        },

        border: "rgba(255,255,255,0.08)"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      maxWidth: {
        container: "1200px"
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },

  plugins: []
};