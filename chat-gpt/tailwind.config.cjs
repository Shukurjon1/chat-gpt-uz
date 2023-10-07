module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('./src/assets/chat_svg.svg')",
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "space-mission": ["SpaceMission", "Poppins", "sans-serif"]
      }
    },
    screens: {
      'sm': '380px',
      // => @media (min-width: 640px) { ... }

      'mdcustom': '600px',
      'md': '810px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'mdx': { 'max': '810px' },
      'md3x': { 'max': '600px' },
      'md2x': { 'max': '500px' },
      'md5x': { 'max': '700px' },
      'md4x': { 'max': '900px' },
      'md6x': { 'max': '350px' },
      'md7x': { 'max': '360px' },
      'md8x': { 'max': '370px' },
    }
  },
  extend: {},
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')
  ],
}

