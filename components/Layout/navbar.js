import Image from "next/image";
import { useTheme } from "../../contexts/Theme";
import Button from "../Button";
import Container from "./container";
import { Header, Img, Navigation, NavLink } from "./styles";

export default function Navbar() {
	const context = useTheme();
	const { theme, toggleTheme } = context;
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<Container>
			<Header>
				<Img>
					<Image
						src="./images/logo.svg"
						alt="mobilekiya-logo"
						width={124}
						height={32}
					/>
				</Img>
				<Navigation>
					<NavLink href="#">Home</NavLink>
					<NavLink href="#">Features</NavLink>
					<NavLink href="#">Services</NavLink>
					<NavLink href="#">Pricing</NavLink>
					<Button className="ml-6xl">Contact Us</Button>
				</Navigation>
			</Header>
		</Container>
	);
}
