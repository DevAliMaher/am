const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ matchUtilities, theme }) {
    // inset inline
    matchUtilities(
      {
        'inset-in': (value) => ({
          insetInline: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'inset-in-s': (value) => ({
          insetInlineStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'inset-in-e': (value) => ({
          insetInlineEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    // inset block
    matchUtilities(
      {
        'inset-bl': (value) => ({
          insetBlock: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'inset-bl-s': (value) => ({
          insetBlockStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'inset-bl-e': (value) => ({
          insetBlockEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
  };
});
