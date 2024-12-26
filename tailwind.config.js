// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in the src directory
    "./public/index.html", // Adds public/index.html if necessary
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans font
      },
    },
  },
  plugins: [],
}
