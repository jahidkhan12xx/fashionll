/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('https://i.ibb.co/7yfYwWj/Screenshot-2023-10-20-142632.png')",
        
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}