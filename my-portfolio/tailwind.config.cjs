module.exports = {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        text: {
          primary: "#0F172A",
          secondary: "#475569",
        },
        accent: {
          DEFAULT: "#0EA5A4",
          blue: "#2563EB",
        },
        border: {
          muted: "#E6E9EE",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Poppins", "ui-sans-serif", "sans-serif"],
      },
      borderRadius: {
        'lg': '0.5rem', // 8px
        '2xl': '1rem', // 16px
      },
      boxShadow: {
        sm: '0 2px 8px 0 rgba(16, 30, 54, 0.04)',
        md: '0 6px 24px 0 rgba(16, 30, 54, 0.08)',
      },
    },
  },
  plugins: [],
};
