const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : ['Inter', 'sans-serif', 'Arial']
      },
      colors:{
        'bgColor' : '#1E1F2B',
        'bgLogo'  : '#CDFFF3',
        'bgBtn1' : '#2BA386',
        'bgBtnHover1' : '#1f8e80'
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        '.bg-homepage': {
          'background-image' : 'url(/bg-homepage.png)',
          'background-size' : 'cover',
        },
        '.bg-overview': {
          'background-image' : 'url(/bgOverview.png)',
          'background-size' : 'cover',
        },
        '.bg-skills': {
          'background-image' : 'url(/bgSkills.svg)',
          'background-size' : 'cover',
        },
        '.bg-projects': {
          'background-image' : 'url(/bgProjects.png)',
          'background-size' : 'cover',
        },
        '.bg-contact': {
          'background-image' : 'url(/bgContact.png)',
          'background-size' : 'cover',
        }
      }
      addUtilities(utilities)
    })
  ],
}
