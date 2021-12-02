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
        lg: '56px',
        xl: '56px',
        96: '96px',
      },
    },
    extend: {
      boxShadow: {
        none: 'none',
        DEFAULT: '-10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD',
        sm: 'inset -5px -5px 10px #FAFBFF, inset 5px 5px 10px #A6ABBD',
        md: '-10px -10px 20px rgba(250, 251, 255, 0.5), 10px 10px 20px rgba(166, 171, 189, 0.5)',
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
      height: {
        80: '80px',
      },
      colors: {
        paraColor: '#4D515C',
        // Configure your color palette here
        grayPublicICO: '#4D515C',
        orange: '#ff830f',
        orangeBlack: '#e06c00',
        BtnBorderColor: 'rgba(255, 255, 255, 0.4)',
        blue: '#0029FF',
        blueRetro: '#0D0F3F',
        gray: '#4D515C',
        grayLight: '#EBECF0',
        'impact-gradient':
          'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(235, 236, 240, 0.2) 0%, rgba(235, 236, 240, 0.0447917) 77.08%, rgba(235, 236, 240, 0) 100%)',
        primaire : "#000B2D",
        },
      borderRadius: {
        40: '40px',
        20: '20px',
      },
      backgroundImage: {
        'button-orange-gradien':
          'linear-gradient(135.37deg, rgba(0, 0, 0, 0.4) 4.29%, rgba(255, 255, 255, 0.4) 95.6%)',
        'impact-gradient':
          'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(235, 236, 240, 0.2) 0%, rgba(235, 236, 240, 0.0447917) 77.08%, rgba(235, 236, 240, 0) 100%)',
      },
      backdropBlur: {
        20: '20px',
      },
      lineHeight: {
        62: '62px',
      },
    },
    fontFamily: {
      NizzoliAlt: 'NizzoliAlt',
      Inter: 'Inter',
      Nizzoli: 'Nizzoli',
      Gilroy : 'Gilroy'
    },
    zIndex: {
      '-1': '-1',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
