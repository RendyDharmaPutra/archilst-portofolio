import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const font = require("next/font/google");

const config: Config = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: [font.Quicksand, "sans-serif"],
			},
		},
	},
	plugins: [],
});
export default config;
