const { theme, plugins } = require('./src/index');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,css}'],
  theme: theme,
  plugins: plugins,
};
