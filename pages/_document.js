import { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
const Document = () => {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;700&display=swap"
					rel="stylesheet"
				/>

				<link rel="icon" href="/images/logo.svg" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};
export default Document;
export const getInitialProps = async (ctx) => {
	const sheet = new ServerStyleSheet();
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			});

		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: [initialProps.styles, sheet.getStyleElement()],
		};
	} catch (err) {
		console.log(err);
	} finally {
		sheet.seal();
	}
};
