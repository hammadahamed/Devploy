module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito : ['Nunito']
      },
      colors: {
        primaryText : '#888883',
        headerbg : '#0b3042',
        darkHeaderBg: '#04181f',
        'cliq-body' : '#1c2a38',
        'cliq-body-dark' : '#15202b',
        'sky-blue' : '#8dccff',
        "sky-blue-light": "#d3edfe",
        'cyan-dark':'#548ab7',
        'cyan-darker':'#3b78ab'
      },
      height :{
        '41vh' : '41vh',
        '30vh' : '30vh',
        '80vh' : '80vh',
        '90vh' : '90vh',
        '93vh' : '93vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
