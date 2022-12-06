/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
		colors: {// https://coolors.co/ffffff-1e582e-890808-661111-1a2b2b-333333-890808-661111-406049-5f8a7b
			'hunter-green': '#1E582E',
			'jet': '#333333',
			'white': '#FFFFFF',
			'dark-red': '#890808',
			'dark-jungle-green': '#1A2B2B',
			'rosewood': '#661111',
			'hunter-green2': '#406049',
			'wintergreen-dream': '#5F8A7B',

			// pinetree instead of dark-jungle-green????
		}
	}
  },
  plugins: [],
}
