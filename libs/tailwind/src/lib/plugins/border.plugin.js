const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ matchUtilities, theme }) {
    // border inline
    matchUtilities(
      {
        'border-in': (value) => ({
          borderInlineWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
    matchUtilities(
      {
        'border-in-s': (value) => ({
          borderInlineStartWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
    matchUtilities(
      {
        'border-in-e': (value) => ({
          borderInlineEndWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
    // border block
    matchUtilities(
      {
        'border-bl': (value) => ({
          borderBlockWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
    matchUtilities(
      {
        'border-bl-s': (value) => ({
          borderBlockStartWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
    matchUtilities(
      {
        'border-bl-e': (value) => ({
          borderBlockEndWidth: `${value}`,
        }),
      },
      { values: theme('borderWidth') }
    );
  };
});
