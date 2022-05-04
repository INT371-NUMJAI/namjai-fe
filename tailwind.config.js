module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"ibm-plex-thai": ['"IBM Plex Sans Thai"', "sans-serif"],
			},
			colors: {
				namjaiwhite: "#FFFFFF",
				namjaibeige: "#F9F4E8",
				namjaigray: "#CACACA",
				namjaibrown: "#B19C6B",
				namjaidarkgray: "#363636",
				namjaiblack: "#000000",
				namjaiyellow: "#FDD65B",
				namjaired: "#D45343",
				namjaigreen: "#00715D",
			}
		},
		screens: {
			'md': '834px',
			'lg': '1280px',
		}
	},
	plugins: [],
};
