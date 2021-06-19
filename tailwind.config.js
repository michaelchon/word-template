module.exports = {
    purge: {
        content: [
            "./pages/**/*.{js,jsx,ts,tsx}",
            "./components/**/*.{js,jsx,ts,tsx}",
            "./lib/**/*.{js,jsx,ts,tsx}",
        ],
    },

    darkMode: false, // or 'media' or 'class'
    theme: {
        container: {
            screens: { sm: "100%", md: "100%", lg: "800px", xl: "800px" },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
