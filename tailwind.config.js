module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    theme: {
      fontSize: {
        navtext: ['16px', '23.92px'],
        heromaintext:['55px','52.8px']  
      },
      
      // screens: {       
      //   'sm': {'min': '640px', 'max': '767px'},
  
      //   'md': {'min': '768px', 'max': '1023px'},
  
      //   'lg': {'min': '1024px', 'max': '1279px'},
  
      //   'xl': {'min': '1280px', 'max': '1535px'},
  
      //   '2xl': {'min': '1536px'},
      // },
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'automatic': 'repeat(auto-fit, minmax(300px, 1fr))',
        'automatic2': 'repeat(auto-fit, minmax(200px, 1fr))',
        'automatic3': 'repeat(auto-fit, minmax(400px, 1fr))',

      },
      dropShadow: {
        'benefits': '0 30px 60px rgba(67, 71, 90, 0.3)',
        'shadowdrop':'0 20px 10px rgba(158, 161, 182, 0.3)' 
      },
      gridColumn: {
        'spannew': 'span 1 / span 0.5',
      }
    },
  },
  plugins: [],  
}