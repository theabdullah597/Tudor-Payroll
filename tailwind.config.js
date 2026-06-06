/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00081e",
        "primary-container": "#0a1f44",
        "secondary": "#3755c3",
        "secondary-container": "#708cfd",
        "surface": "#f7f9fb",
        "surface-container-low": "#f2f4f6",
        "surface-container-high": "#e6e8ea",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#191c1e",
        "on-surface-variant": "#44464e",
        "on-primary": "#ffffff",
        "on-secondary": "#ffffff",
        "on-primary-container": "#7687b2",
        "on-secondary-container": "#00217a",
        "tertiary-fixed-dim": "#b7c8e1",
        "outline-variant": "#c5c6cf",
        "outline": "#75777f",
        "background": "#f7f9fb",
        "on-background": "#191c1e",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
      spacing: {
        "section-gap": "80px",
        "margin-mobile": "16px",
        "container-max": "1280px",
        "stack-md": "16px",
        "stack-sm": "8px",
        "gutter": "24px",
        "stack-lg": "24px",
        "margin-desktop": "40px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
}
