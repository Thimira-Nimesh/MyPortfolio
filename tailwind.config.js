/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "tab-break": "1000px",
        "form-breal": "535px",
        dancing: ['"Dancing Script"', "cursive"],
      },
    },
  },

  plugins: [],
};

