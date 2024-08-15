import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens : {
        desktop: { min: '1280px' },
        tablet: { max: '1279px', min: '399px' },
        mobile: { max: '400px' },
      }
    },
  },
  plugins: [],
} satisfies Config
