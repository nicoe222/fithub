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
        lokasi: "url('../public/assets/lokasi.jpg')",
        fasilitas: "url('../public/assets/fasilitas.jpg')",
        event: "url('../public/assets/eventfh.jpg')",
        owngym: "url('../public/assets/owngym.jpg')",
        corporate: "url('../public/assets/corporate.jpg')",
        freetrial: "url('../public/assets/free-trial.png')",
      },
      colors: {
        blues: "#6EC1E4",
        judul: "#143650f5",
        juduls: "#f8d355",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss"), require("daisyui")],
};
