module.exports = {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {
      config: './tailwind.config.js',
      autoprefixer: true,
      future: {
        hoverOnlyWhenSupported: true,
      },
      corePlugins: {
        preflight: false,
      },
    },
    autoprefixer: {
      remove: false,
      flexbox: 'no-2009',
    },
  },
}
