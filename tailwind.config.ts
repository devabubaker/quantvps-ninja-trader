import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './landing/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@openstatus/react/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        SfProLight: 'sf-pro-light',
        SfProRegular: 'sf-pro-regular',
        SfProMedium: 'sf-pro-medium',
        SfProSemibold: 'sf-pro-semibold',
        SfProBold: 'sf-pro-bold',
        SfProDisplayLight: 'sf-pro-display-light',
        SfProDisplayRegular: 'sf-pro-display-regular',
        SfProDisplayMedium: 'sf-pro-display-medium',
        SfProDisplaySemibold: 'sf-pro-display-semibold',
        SfProDisplayBold: 'sf-pro-display-bold',
        GiestUltraThin: 'ultra',
        GiestThin: 'thins',
        GiestRegular: 'regulars',
        GiestMedium: 'mediums',
        GiestSemiBold: 'semibolds',
        GiestBold: 'bolds',
        GiestBlack: 'blacks',
        Caveat: ['Caveat Brush', 'cursive']
      },

      boxShadow: {
        sh: '0px 3px 5px 0px rgba(0, 0, 255, 0.3)',
        Shadow1:
          '0px 0.998px 0.998px 0px rgba(255, 255, 255, 0.20), 0px 5.988px 11.976px 0px rgba(255, 255, 255, 0.12), 0px 0.998px 1.996px 0px rgba(8, 8, 8, 0.20), 0px 3.992px 3.992px 0px rgba(8, 8, 8, 0.08)',
        Shadow2: '2.649px 5.298px 21.192px 0px rgba(248, 248, 248, 0.06)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        linearGradient1: 'linear-gradient(91deg, #2997FF 1.83%, #F9FFEF 98.9%)',
        linearGradient2:
          'linear-gradient(143deg, #FFF 18.17%, rgba(255, 255, 255, 0.00) 152.61%)',
        linearGradient3:
          'linear-gradient(180deg, #1C1C1C 0%, rgba(28, 28, 28, 0.00) 100%)'
      },
      colors: {
        main: '#171717',
        body: '#666666',
        stroke15card: 'rgba(255, 255, 255, 0.10)',
        surfaceBackground: 'rgba(40, 40, 40, 0.70)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },

        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        },
        buttonheartbeat: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.gray.500")',
            transform: 'scale(1)'
          },
          '50%': {
            'box-shadow': '0 0 0 7px theme("colors.gray.500/0")',
            transform: 'scale(1.05)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 theme("colors.gray.500/0")',
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        buttonheartbeat: 'buttonheartbeat 2s infinite ease-in-out',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [require('tailwindcss-animate')] // we need this library for the default animations of shadcn/ui components
}
export default config
