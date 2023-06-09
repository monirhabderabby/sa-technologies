/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./Components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontFamily: {
                inter: ["var(--font-inter)"],
                lato: ["var(--font-inter)"],
                manrope: ["var(--font-manrope)"],
            },
            colors: {
                primary: "#0056D6",
                secondary: "#F7F1FF",
            },
            boxShadow: {
                hightlighted: "0px 40px 80px rgba(155,149,149,0.16)",
            },
            background: {
                light: "linear-gradient(180deg,#F3F9F9 0%,rgba(238,246,253,0) 100%)",
            },
        },
    },
    plugins: [],
});
