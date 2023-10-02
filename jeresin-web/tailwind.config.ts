import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#EBE8E7',
      'loulou': '#5A2D48',
      'charm': '#CB7687',
      'wax': '#F0ACA1',
      'trendy': '#8E608D',
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
    },
  },
  plugins: [],
}
export default config
