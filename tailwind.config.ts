import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "primary-purple": "hsl(259, 100%, 65%)",
            "primary-light-red": "hsl(0, 100%, 67%)",
            "white": "hsl(0, 0%, 100%)",
            "off-white": "hsl(0, 0%, 94%)",
            "light-grey": "hsl(0, 0%, 86%)",
            "smokey-grey": "hsl(0, 1%, 44%)",
            "off-black": "hsl(0, 0%, 8%)",
        },
        extend: {
        backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        },
    },
    plugins: [],
};
export default config;
