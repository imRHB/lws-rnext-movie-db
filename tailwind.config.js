/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1.25rem",
            },
            colors: {
                primary: "#00D991",
                dark: "#171923",
                light: "#fff",
                body: "#1D1E28",
            },
            fontFamily: {
                sans: ["Sora", "sans-serif"],
            },
        },
    },
    plugins: [],
};
