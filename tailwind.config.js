module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				headline: ['Aladin', 'serif'],
				copy: ['Saira', 'sans-serif'],
			},
			colors: {
				main: '#1ba261',
			},
		},
	},
	plugins: [],
}
