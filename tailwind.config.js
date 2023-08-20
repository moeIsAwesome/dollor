/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sansSerif: ['Source Sans 3', 'sans - serif'],
      mono: ['Source Code Pro', 'monospace'],
      handwriting: ['Kalam', 'cursive'],
    },
    extend: {
      backgroundImage: {
        arrowRightUP: "url('/images/arrow-right-up.svg')",
        arrowLeftUp: "url('/images/arrow-left-up.svg')",
        circle: "url('/images/circle.svg')",
      },

      borderWidth: {
        1: '1px',
      },
      boxShadow: {
        colored: '0 7px 16px rgba(127,91,220,0.002);',
        coloredHover: '0 16px 25px rgba(127,91,220,0.3);',
        tableRow: '0px 0px 6px rgba(0, 0, 0, 0.16);',
      },
      colors: {
        blueGem: '#3813a0',
        caribbeanGreen: '#1cc6a0',
        daisyBush: '#4714a5',
        fog: '#decaec',
        gallery: '#efeaf2',
        goldenFizz: '#feff40',
        lavenderIndigo: '#8657e1',
        monsoon: '#777878',
        pastelPurple: '#b2a1bb',
        purple: '#7209b7',
        prim: '#ede6ef',
        robinEggBlue: '#00e9c0',
        scarlet: '#f72f45',
        silver: '#c0c0c0',
        whisper: '#f9f4f9',
      },
      gridTemplateColumns: {
        invoiceTable: '100px 100px 60px 1fr 116px 32px 32px ',
        invoiceTableMobile: '1fr 90px',
      },

      zIndex: {
        navBarToggle: 1001,
        navBar: 1000,
      },
    },
  },
  plugins: [],
};
