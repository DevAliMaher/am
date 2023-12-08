module.exports = {
  prefix: 'am-',
  darkMode: 'class',
  theme: {
    corePlugins: {
      container: false,
    },
    container: {
      center: true,
    },
    fontFamily: {
      cairo: ['Cairo', 'sans-serif'],
    },
    fontWeight: {
      DEFAULT: 300,
      unset: 'unset',
      initial: 'initial',
      inherit: 'inherit',
      auto: 'auto',
      normal: 'normal',
      none: 'none',
      300: 300,
      500: 500,
      700: 700,
    },
    extend: {
      colors: {},
      spacing: {
        unset: 'unset',
        initial: 'initial',
        inherit: 'inherit',
        auto: 'auto',
        normal: 'normal',
        full: '100%',
      },
    },
  },
  plugins: [
    // components
    require('./components/container.component'),
    // utilities
    require('./plugins/border.plugin'),
    require('./plugins/extend-bg.plugin'),
    require('./plugins/inset.plugin'),
    require('./plugins/margin.plugin'),
    require('./plugins/padding.plugin'),
  ],
};
