import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'background-light': '#FAFAFA',
			}
		},
	},
	plugins: [typography],
}
