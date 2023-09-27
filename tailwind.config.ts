import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'template_2_testiminols_bgImage':"url('/testiminols.png')"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'SFProDisplay': ['SF Pro Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
