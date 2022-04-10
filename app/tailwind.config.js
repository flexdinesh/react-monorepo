const {
  default: { theme, plugins },
} = require('@design-system/theme');

module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    '../node_modules/@design-system/**/*.{html,tsx, ts, jsx, js}',
  ],
  theme: theme,
  plugins: plugins,
};
