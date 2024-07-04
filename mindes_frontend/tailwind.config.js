const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      gray: `#a0aec0`,
      white: "#F9FCFF",
      black: "#000D17",
      blue: "#1A5C92",
      bluenight: "#244967",
      warning: "#F9A825",
      danger: "#D32F2F",
      success: "#388E3C",
      info: "#2196F3",
    },

    fontFamily: {
      sans: "open-sans, sans-serif",
    },
    fontSize: {
      "overline-2": "10px",
      "overline-1": "12px",
      "caption-2": "12px",
      "caption-1": "14px",
      "body-2": "16px",
      "body-1": "18px",
      "heading-6": "20px",
      "heading-5": "24px",
      "heading-4": "28px",
      "heading-3": "32px",
      "heading-2": "38px",
      "heading-1": "48px",
      "display-2": "54px",
      "display-1": "72px",
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      margin: {
        70: "70px",
      },
      padding: {
        70: "70px",
      },
      colors: {
        primary: {
          50: "#1F308B",
          40: "#2A40B9",
          30: "#3450E7",
          20: "#5D73EC",
          10: "#8596F1",
        },
        secondary: {
          60: "#1F2F3C",
          50: "#1A5C92",
          40: "#5087B5",
          30: "#97C1E4",
          20: "#BBDEFB",
          10: "#EBF5FE",
        },
        grayscale: {
          90: "#F3F2F7",
          60: "#161616",
          50: "#4D4E50",
          40: "#323232",
          30: "#999B9D",
          20: "#E0E1E2",
          10: "#FFFFFF",
        },
      },
      backgroundImage: {
        "gradient-60":
          "linear-gradient(180deg, #3450E7 0%, rgba(255, 255, 255, 0.10) 100%)",
        "gradient-50":
          "linear-gradient(180deg, #97C1E4 0%, rgba(255, 255, 255, 0.10) 100%)",
        "gradient-40": "linear-gradient(180deg, #3450E7 0%, #97C1E4 100%)",
        "gradient-30":
          "linear-gradient(180deg, rgba(52, 80, 231, 0.50) 0%, white 100%)",
        "gradient-20": "linear-gradient(180deg, #97C1E4 0%, #FFF 100%)",
        "gradient-10":
          "linear-gradient(115deg, #7FC6ED 0%, #D4E4F2 20%, #8796EC 40%, #9470FF 60%, #87ACEB 80%, #EBEAFF 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)",
      },
      keyframes: {
        AnimationName: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'background-animate': 'AnimationName 3s ease infinite',
      },
    },
  },
  darkMode: "false",
  plugins: [require("daisyui"), nextui()],
};
