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
          "linear-gradient(180deg, rgb(127, 198, 237) 0%, rgb(211.97, 228.49, 242.25) 20%, rgb(134.65, 150.22, 235.88) 40%, rgb(148.07, 111.56, 255) 60%, rgb(135, 172, 235) 80%, rgb(234.51, 233.75, 255) 100%)",
      },
    },
  },
  darkMode: "false",
  plugins: [require("daisyui"), nextui()],
};
