/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        50: '#072A55',
        40: '#0A3C79',
        30: '#3450E7',
        20: '#5D73EC',
        10: '#8596F1',
      },
      secondary: {
        50: '#1A5C92',
        40: '#5087B5',
        30: '#97C1E4',
        20: '#BBDEFB',
        10: '#EBF5FE',
      },
      greyscale: {
        60: '#161616',
        50: '#4D4E50',
        40: '#323232',
        30: '#999B9D',
        20: '#E0E1E2',
        10: '#FFFFFF',
      },
      gradient: {
        60: 'linear-gradient(90deg, #3450E7 0%, #8596F1 100%)',
        50: 'linear-gradient(90deg, #0A3C79 0%, #5D73EC 100%)',
        40: 'linear-gradient(90deg, #072A55 0%, #8596F1 100%)',
        30: 'linear-gradient(90deg, #0A3C79 0%, #8596F1 100%)',
        20: 'linear-gradient(90deg, #3450E7 0%, #8596F1 100%)',
        10: 'linear-gradient(90deg, #3450E7 0%, #8596F1 100%)',
      },
    },
    fontFamily: {
      sans: 'open-sans, sans-serif',
    },
    fontSize: {
      'overline-2': '10px',
      'overline-1': '12px',
      'caption-2': '12px',
      'caption-1': '14px',  
      'body-2':   '16px',
      'body-1':   '18px',
      'heading-6': '20px',  
      'heading-5': '24px',
      'heading-4': '28px',
      'heading-3': '32px',
      'heading-2': '38px',  
      'heading-1': '48px',
      'display-2': '54px',
      'display-1': '72px',
    },
    extend: {
    },
  },
  plugins: [],
}

