module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1440px',
        xl: '2000px',
      },
      padding: {
        20: '20px',
        default: '24px',
        md: '32px',
        lg: '64px',
        xl: '56px',
        96: '96px',
      },
    },
    // gradientColorStops: (theme) => ({
    //   ...theme('colors'),
    //   primary: '#3490dc',
    //   secondary: '#ffed4a',
    //   danger: '#e3342f',
    // }),
    extend: {
      boxShadow: {
        none: 'none',
        DEFAULT: '-10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD',
        md: '-10px -10px 20px rgba(250, 251, 255, 0.5), 10px 10px 20px rgba(166, 171, 189, 0.5)',
        // btn: 'inset 5px 5px 10px #f7f7f7,inset -5px -5px 5px #FF7A00;;',
      },
      spacing: {
        40: '40px',
      },
      fontFamily: {
        body: ['Nizzoli'],
      },
      width: {
        50: '50rem',
      },
      colors: {
        paraColor: '#4D515C',
        // Configure your color palette here
        grayPublicICO: '#4D515C',
        orange: '#FF7A00',
        orangeBlack: '#eb7100',
        BtnBorderColor: 'rgba(255, 255, 255, 0.4)',
        blue: '#0029FF',
        blueRetro: '#0D0F3F',
        gray: '#4D515C',
      },
      borderRadius: {
        40: '40px',
      },
    },

    fontFamily: {
      NizzoliAlt: 'NizzoliAlt',
      Inter: 'Inter',
      Nizzoli: 'Nizzoli',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
