"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fadeInOut 4s ease-in-out infinite'
      },
      colors: {
        'custom-red': '#B22222',
        'custom-grey': '#343a40',
        'custom-black': '#010314' // Add more custom colors here if needed

      },
      keyframes: {
        fadeInOut: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '50%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(20px)'
          }
        }
      },
      fontFamily: {
        heading: ['"Helvetica Neue"', 'Arial', 'sans-serif', 'Roboto'],
        subheading: ['"Georgia"', 'serif'],
        paragraph: ['"Roboto"', 'sans-serif']
      },
      fontSize: {
        heading: '4rem',
        // 32px
        subheading: '2rem',
        // 24px
        paragraph: '0.9rem' // 16px

      }
    }
  },
  plugins: []
};