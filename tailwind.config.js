module.exports = {
  content: [
    './app/javascript/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
