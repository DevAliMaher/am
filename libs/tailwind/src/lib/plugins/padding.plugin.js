const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ matchUtilities, theme }) {
    // padding inline
    matchUtilities(
      {
        'p-in': (value) => ({
          paddingInline: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'p-in-s': (value) => ({
          paddingInlineStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'p-in-e': (value) => ({
          paddingInlineEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    // padding block
    matchUtilities(
      {
        'p-bl': (value) => ({
          paddingBlock: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'p-bl-s': (value) => ({
          paddingBlockStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'p-bl-e': (value) => ({
          paddingBlockEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
  };
});
