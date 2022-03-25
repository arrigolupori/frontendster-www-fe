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
				main: '#3aa25e',
				background: '#d8ecdf',
				copy: '#061009',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio'),
	],
}
