module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderRadius: {
      'default': '10px',
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    },
    extend: {
      colors: {
        'primary': '#22215B',
        'bgNav': '#FF6262',
        'bgInfo':'#E5E5E5',
      },
    },
  },
  plugins: [],
}
