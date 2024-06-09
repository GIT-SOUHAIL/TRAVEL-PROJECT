/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes:{ 
        'up-down':{
        '0%, 100%':{ transform: 'translateY(-20px)' },
        '50%':{ transform:'translateY(5px)'}
        },

        'left-right':{
          '0%, 100%':{ transform: 'translateX(50px)' },
          '50%':{ transform:'translateY(50px)'}
        },
      },
      animation :{
        'up-down' :'up-down 1.3s infinite ' , 
        'left-right' :'left-right 1.5s infinite '   
      },

      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'bg-img-3': "url('/img-3.png')", 
        'bg-img-4': "url('/img-4.png')", 
        'bg-img-5': "url('/img-5.png')", 
        'bg-img-6': "url('/img-6.png')", 
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '12md' :'320px',
        'sxl' : '1000px',
        '1xl' : '700px' ,
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};