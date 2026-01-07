/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            colors: {
                // New "Fresh Fit" Palette (Teal & Lime)
                'simmer-orange': '#0F766E', // Primary Brand (Deep Teal) - Used for Headings, Main Backgrounds
                'simmer-yellow': '#D9F99D', // Accent (Lime Green) - Used for Buttons, Highlights
                'simmer-purple': '#1E1B4B', // Secondary (Dark Navy) - Used for Banners
                'simmer-light': '#F0FDFA',  // Background (Mint Cream)
                'simmer-dark': '#134E4A',   // Text (Dark Teal/Slate)
                'simmer-white': '#FFFFFF',
                'simmer-red': '#E11D48',    // Error/promo
            },
            backgroundImage: {
                'marble': "url('https://img.freepik.com/free-photo/white-marble-texture-background_1083-93.jpg?w=1380&t=st=1678901234~exp=1678901834~hmac=...')", // Placeholder or we'll use a color
            },
            animation: {
                marquee: 'marquee 25s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
