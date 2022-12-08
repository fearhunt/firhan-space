/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  darkMode: [
    "class",
    "[data-mode='dark']"
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      }
    },
    colors: {
      primary: "#222436",
      "dark-primary": "#1E2030",
      "slate-gray": "#C7D4F5",
      maroon: "#434A73"
    }
  },
  plugins: [],
}
