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
                heading: ['Outfit', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#FF6B6B', // Energetic Coral
                    dark: '#EE5253',
                },
                secondary: '#4ECDC4', // Fresh Teal
                accent: '#FFE66D', // Soft Yellow
                dark: '#2D3436', // Dark Charcoal
                light: '#F7FFF7', // Mint Cream
                // bg: '#FAFAFA', // We can use standard slate-50 or gray-50, or custom
            }
        },
    },
    plugins: [],
}
