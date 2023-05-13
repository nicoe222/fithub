/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        sections: "url('../public/assets/ptrainer.jpg')",
        jadwal: "url('../public/assets/jadwal.png')",
        membership: "url('../public/assets/membership.jpg')",
      },
      colors: {
        blues: "#6EC1E4",
        judul: "#143650f5",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
