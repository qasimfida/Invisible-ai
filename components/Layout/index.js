import Navbar from "./navbar";
import { useTheme } from "styled-components";
import { LayoutWrapper } from "./styles";

export default function Layout({ children, ...rest }) {
	const { theme } = useTheme();
	return (
		<LayoutWrapper {...rest}>
			<Navbar />
			<main>{children}</main>
		</LayoutWrapper>
	);
}
