/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'evergreen': {
          50: '#F2F7F4',
          100: '#e0ebe3',
          200: '#c3d7ca',
          300: '#9abba7',
          400: '#6e9980',
          500: '#4e7b63',
          600: '#3a614d',
          700: '#2f4d3f',
          800: '#273e33',
          900: '#20342b',
          950: '#111d18',
        },
        'rose': {
          50: '#fbf5f5',
          100: '#f8ebeb',
          200: '#f1dadb',
          300: '#e5bcbe',
          400: '#d6969b',
          500: '#c46f78',
          600: '#ad515f',
          700: '#90404e',
          800: '#7a3746',
          900: '#69323f',
          950: '#39181f',
        },
        'stone': {
          50: '#f4f6f7',
          100: '#e4e9e9',
          200: '#ccd4d5',
          300: '#a8b6b8',
          400: '#7d9093',
          500: '#5d7073',
          600: '#536367',
          700: '#485356',
          800: '#40484a',
          900: '#383e41',
          950: '#232729',
        },
        'auburn': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde58a',
          300: '#fbd24e',
          400: '#fabe25',
          500: '#f49d0c',
          600: '#d87607',
          700: '#bc560a',
          800: '#923f0e',
          900: '#78340f',
          950: '#451a03',
        },
        'sand': {
          50: '#F7F5EF',
          100: '#ECE3D5',
          200: '#DBC9AD',
          300: '#C6A77E',
          400: '#B5895A',
          500: '#A7774C',
          600: '#8F5E3F',
          700: '#734835',
          800: '#613E32',
          900: '#55352E',
          950: '#301B18',
        },
      },
      fontSize: {
        sm: ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        base: ['19px', {
          lineHeight: '28.5px',
          fontWeight: '400',
        }],
        lg: ['28px',  {
          lineHeight: '42px',
          fontWeight: '400',
        }],
        
        /* H5 */
        xl: ['23px',  {
          lineHeight: '65px',
          fontWeight: '400',
          letterSpacing: '-0.23px',
        }], 
        /* H4 */
        '2xl': ['34px',  {
          lineHeight: '44px',
          fontWeight: '400',
          letterSpacing: '-0.34px',
        }], 
        /* H3 */
        '3xl': ['41px',  {
          lineHeight: '45px',
          fontWeight: '400',
          letterSpacing: '-0.41px',
        }], 
        /* H2 */
        '4xl': ['49px',  {
          lineHeight: '54px',
          fontWeight: '400',
          letterSpacing: '-0.49px',
        }], 
        /* H1 */
        '5xl': ['59px',  {
          lineHeight: '65px',
          fontWeight: '700',
          letterSpacing: '-0.59px',
        }], 
      },
    },
  },
  plugins: [],
};
