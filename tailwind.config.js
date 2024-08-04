/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },

      screens: {
        laptopSmall: { max: "1024px" },
        tablet: { max: "768px" },
        premobile: { max: "650px" },
        premobile1: { max: "550px" },
        mobile: { max: "425px" },
        phone: { max: "375px" },
        radio: { max: "330px" },
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors:{

        primary:{
         DEFAULT: '#217CDE',
        },
        secondary: {
           DEFAULT: '#2563EB',
        }

      }
    },
  },
  plugins: [],
}

