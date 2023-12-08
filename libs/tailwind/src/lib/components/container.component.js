const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ addComponents, theme }) {
    addComponents({
      '.container': {
        height: '100%',
        width: 'clamp(300px,100%,1140px)',
        maxWidth: 'clamp(300px,100%,1140px)',
        paddingInline: theme('spacing.4'),
        marginInline: 'auto',
      },
    });
  };
});
