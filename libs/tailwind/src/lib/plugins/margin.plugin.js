const plugin = require('tailwindcss/plugin');

module.exports = plugin.withOptions(function () {
  return function ({ matchUtilities, theme }) {
    // margin inline
    matchUtilities(
      {
        'm-in': (value) => ({
          marginInline: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'm-in-s': (value) => ({
          marginInlineStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'm-in-e': (value) => ({
          marginInlineEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    // margin block
    matchUtilities(
      {
        'm-bl': (value) => ({
          marginBlock: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'm-bl-s': (value) => ({
          marginBlockStart: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
    matchUtilities(
      {
        'm-bl-e': (value) => ({
          marginBlockEnd: `${value}`,
        }),
      },
      { values: theme('spacing') }
    );
  };
});
