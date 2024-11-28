import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'main-text': '#6B6B6B',
        'main-link-hover': '#4C91D3',
        'main-footer-text': '#333333',
        'main-header-text': '#1E73BE',
      },
      backgroundColor: {
        'main-bg': '#FFFFFF',
        'main-dark-bg': '#20232A',
        'main-btn-hover': '#4C91D3',
        'main-footer': '#F7F7F7',
        'secondary-dark-bg': '#33373E',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
} satisfies Config;
