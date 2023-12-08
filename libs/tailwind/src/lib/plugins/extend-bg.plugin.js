const plugin = require('tailwindcss/plugin');
const flattenColorPalette =
  require('tailwindcss/lib/util/flattenColorPalette').default;

module.exports = plugin.withOptions(function () {
  return function ({ matchUtilities, theme }) {
    // full screen bg
    matchUtilities(
      {
        'extended-bg': (value) => ({
          'box-shadow': `0 0 0 100vmax ${value}`,
          'clip-path': 'inset(0 -100vmax)',
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    );

    matchUtilities(
      {
        'extend-bg-before': (value) => ({
          position: 'relative !important',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            'z-index': -1,
            'box-shadow': `0 0 0 100vmax ${value}`,
            'clip-path': 'inset(0 -100vmax)',
          },
        }),
      },
      { values: flattenColorPalette(theme('colors')), type: 'color' }
    );
  };
});
