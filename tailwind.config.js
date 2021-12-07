module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '375px',
      sm: '768px',
      md: '960px',
      lg: '1440px',
      // '2lg': '1600px',
      xl: '2000px',
      // 'lg-height': { raw: '(min-height: 960px)' },
      // 'md-height': { raw: '(max-height: 785px)' },
      // "2xl": "1600px"
    },
    container: {
      screens: {
        sm: '100%',
        md: '1330px',
        lg: '1440px',
        xl: '2000px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '56px',
        xl: '5rem',
        '2xl': '6rem',
        '5xl': '32rem',
      },
    },
    extend: {
      inset: {
        11: '11rem',
      },
      translate: {
        '4/7': '57.1428571%',
      },
      dropShadow: {
        'first-shadow': '-10px -10px 20px #FAFBFF',
        'second-shadow': '10px 10px 20px #A6ABBD',
      },
      boxShadow: {
        none: 'none',
        DEFAULT: '-10px -10px 20px #FAFBFF, 10px 10px 20px #A6ABBD',
        sm: 'inset -5px -5px 10px #FAFBFF, inset 5px 5px 10px #A6ABBD',
        md: '-10px -10px 20px rgba(250, 251, 255, 0.5), 10px 10px 20px rgba(166, 171, 189, 0.5)',
      },
      spacing: {
        '2px': '2px',
        17: '70px',
        40: '40px',
        91: '91px',
        250: '250px',
        171: '171px',
      },
      fontFamily: {
        body: ['Nizzoli'],
      },
      width: {
        50: '50rem',
        519: '519px',
        '5/7': '70%',
        410: '410px',
        160: '160px',
      },
      maxWidth: {
        252: '252px',
      },
      height: {
        80: '80px',
      },
      colors: {
        colorBlueHover: '#0622B7',
        colorGrayHover: '#DCDEE8',
        colorBtnHover: '#D26500',
        paraColor: '#4D515C',
        // Configure your color palette here
        grayPublicICO: '#4D515C',
        orange: '#ff830f',
        orangeBlack: '#e06c00',
        BtnBorderColor: 'rgba(255, 255, 255, 0.4)',
        blue: '#0029FF',
        blueRetro: '#0D0F3F',
        gray: '#4D515C',
        'gray-100': '#EBECF0',
        grayLight: '#EBECF0',
        blueLight: '#647DFE',
        blueCiel: '#7589F7',
        orangeLight: '#FF7A00',
        blueFooter: '#0C1A6C',
        blackLight: '#121E34',
        'impact-gradient':
          'radial-gradient(90.16% 143.01% at 15.32% 21.04%, rgba(235, 236, 240, 0.2) 0%, rgba(235, 236, 240, 0.0447917) 77.08%, rgba(235, 236, 240, 0) 100%)',
        primaire: '#000B2D',
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
        'glass-border':
          'linear-gradient(120deg, rgba(255,255,255,1) 0%, rgb(142 143 146 / 27%) 100%)',
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
      Gilroy: 'Gilroy',
      Poppins: 'Poppins',
    },
    zIndex: {
      '-1': '-1',
      3: '3',
    },
    flexGrow: {
      0: 0,
      1: 1,
      2: 2,
    },
  },

  variants: {
    extend: { borderWidth: ['hover'] },
  },
  plugins: [],
}
