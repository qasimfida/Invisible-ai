import { createContext, useContext } from "react";

export const ThemeContext = createContext({ theme: "light" });
export const useTheme = () => useContext(ThemeContext);
const common = {
	spacing: {
		size: 4,
	},
	container: 1240,
	breakPoints: {
		min: 0,
		xs: 768,
		sm: 992,
		md: 1200,
		lg: 1366,
		xl: 1920,
	},
	font: {
		base: "ProximaRegular",
		bold: "ProximaBold",
		black: "ProximaBlack",
	},
	fontSize: {
		xs: "0.625rem",
		sm: "0.75rem",
		md: "0.875rem",
		base: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.375rem",
		"3xl": "1.5rem",
		"4xl": "2rem",
		"5xl": "2.25rem",
		"6xl": "3.4rem",
	},
	colors: {
		primary: "#32A0C8",
		primary_light: "#3fb3dd",
		white: "#fff",
		black: "#000",
		grey: "#A8A8A8",
		dark: "#0F1623",
		border: "#0a0e16",
		light_grey: "#F4F4F4",
		bg: "radial-gradient(50% 50% at 50% 50.68%, rgba(12, 16, 24, 0.9) 0%, #0C1018 0.01%, #141323 0.02%, #0A0D15 100%)",
	},
};
export const lightTheme = {
	...common,
};
export const darkTheme = {
	...common,
};
