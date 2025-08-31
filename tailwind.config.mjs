/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",     // for Next.js pages folder
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // for components
        "./app/**/*.{js,ts,jsx,tsx,mdx}",        // for app router
    ],
    theme: {
        extend: {
            colors: {
                lightHover: "#fcf4ff",
                darkHover: "#2a004a",
                darkTheme: "#1a001f",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"],
                ovo: ["Ovo", "serif"],
            },
            boxShadow: {
                black: "4px 4px 0 #000",
                white: "4px 4px 0 #fff",
            },
            gridTemplateColumns: {
                "auto": "repeat(auto-fit, minmax(200px, 1fr))",
            }
        },
    },
    darkMode: "class",
    plugins: [],
};
