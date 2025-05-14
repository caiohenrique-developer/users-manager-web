import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("tailwindcss-animate")],
};

export default config;
