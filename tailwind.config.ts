import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/store/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        //
        "jc-gray-1": "#212428",
        // typewriter
        "jc-gray-2": "#ffffffb3",
        //
        "jc-gray-3": "#ddd",
        //title
        "jc-white-1": "#f2f3f5",
        //
        "jc-blue-1": "#0563bb",
        //
        "jc-dark-1": "#45505b",
        "jc-dark-2": "#212428de",
        "jc-dark-3": "#3a3a3a",
        "jc-dark-4": "#728394",
        "jc-dark-5": "#272829",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        raleway: ["var(--font-raleway)"],
        "open-sans": ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
