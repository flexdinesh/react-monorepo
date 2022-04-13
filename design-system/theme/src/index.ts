// @ts-ignore
import plugin from 'tailwindcss/plugin';
// @ts-ignore
import swatchGenerator from '@packages/swatch-generator';

const honey = {
  name: 'honey',
  primary: '#f9bc60',
  secondary: '#e16162',
  textBase: '#abd1c6',
  textInverted: '#001e1d',
  bgBase: '#004643',
  bgInverted: '#e8e4e6',
};

const neon = {
  name: 'neon',
  primary: '#8be600',
  secondary: '#2cb67d',
  textBase: '#2a2a2a',
  textInverted: '#0d0d0d',
  bgBase: '#eff0f3',
  bgInverted: '#000f1f',
};

const colorSchemes = [honey, neon];

export = {
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'var(--color-primary-base)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          base: 'var(--color-secondary-base)',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
      },
      textColor: {
        base: 'var(--color-text-base)',
        inverted: 'var(--color-text-inverted)',
      },
      backgroundColor: {
        base: 'var(--color-bg-base)',
        inverted: 'var(--color-bg-inverted)',
      },
    },
  },
  plugins: [
    plugin(({ addBase }: any) => {
      const themeClasses = colorSchemes.map(c => {
        const { swatch: primarySwatch } = swatchGenerator(c.primary);
        const { swatch: secondarySwatch } = swatchGenerator(c.secondary);
        return {
          [`body[data-theme='${c.name}']`]: {
            '--color-primary-base': c.primary,
            '--color-primary-50': primarySwatch[0],
            '--color-primary-100': primarySwatch[1],
            '--color-primary-200': primarySwatch[2],
            '--color-primary-300': primarySwatch[3],
            '--color-primary-400': primarySwatch[4],
            '--color-primary-500': primarySwatch[5],
            '--color-primary-600': primarySwatch[6],
            '--color-primary-700': primarySwatch[7],
            '--color-primary-800': primarySwatch[8],
            '--color-primary-900': primarySwatch[9],
            '--color-secondary-base': c.secondary,
            '--color-secondary-50': secondarySwatch[0],
            '--color-secondary-100': secondarySwatch[1],
            '--color-secondary-200': secondarySwatch[2],
            '--color-secondary-300': secondarySwatch[3],
            '--color-secondary-400': secondarySwatch[4],
            '--color-secondary-500': secondarySwatch[5],
            '--color-secondary-600': secondarySwatch[6],
            '--color-secondary-700': secondarySwatch[7],
            '--color-secondary-800': secondarySwatch[8],
            '--color-secondary-900': secondarySwatch[9],
            '--color-text-base': c.textBase,
            '--color-text-inverted': c.textInverted,
            '--color-bg-base': c.bgBase,
            '--color-bg-inverted': c.bgInverted,
          },
        };
      });

      addBase(themeClasses);
    }),
  ],
} as const;
