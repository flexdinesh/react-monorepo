const dsPreset = require('@design-system/theme');

module.exports = {
  presets: [dsPreset],
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    '../node_modules/@design-system/**/*.{html,tsx, ts, jsx, js}',
  ],
};
