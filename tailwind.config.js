/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.html.erb',  // Include all ERB files in views
    './app/helpers/**/*.rb',      // Include any helpers
    './app/assets/stylesheets/**/*.css',  // Include CSS files
    './app/javascript/**/*.js',   // Include JS files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
