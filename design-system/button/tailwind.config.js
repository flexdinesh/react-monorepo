const {
  default: { theme, plugins },
} = require('@design-system/theme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: theme,
  plugins: plugins,
};
