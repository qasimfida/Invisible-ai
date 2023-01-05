import { useCallback, useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import { darkTheme, lightTheme, ThemeContext } from "../contexts/Theme";
import { GlobalStyle } from "../styles";
import { Jura } from "@next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const jura = Jura({ weight: ["300", "400", "500", "700"], subsets: ["latin"] });
export default function App({ Component, pageProps }) {
	const [theme, setTheme] = useState("light");

	const toggleTheme = useCallback(
		(value) => {
			if (value !== theme) {
				setTheme(value);
				localStorage.setItem("theme", value);
			}
		},
		[theme]
	);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		const prefersDark =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (savedTheme && ["dark", "light"].includes(savedTheme)) {
			toggleTheme(savedTheme);
		} else if (prefersDark) {
			toggleTheme("light");
		}
	}, [toggleTheme]);

	const value = useMemo(() => {
		return { theme, toggleTheme };
	}, [theme, toggleTheme]);
	return (
		<>
			<GlobalStyle />
			<ThemeContext.Provider value={value}>
				<ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
					<Layout className={jura.className}>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</ThemeContext.Provider>
		</>
	);
}
