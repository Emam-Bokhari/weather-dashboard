/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
  },
  colors: {
      body: "#1D1E28",
      light: "#fff",
  }
  },
  plugins: [],
}

