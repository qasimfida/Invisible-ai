import Container from "../../components/Layout/container";
import Slider from "../../components/Slider";
import Writter from "../../components/writer";
import { Wrapper, Heading, ServkceWrapper } from "./styles";
const HomeContainer = () => {
	return (
		<>
			<Wrapper>
				<Heading>
					Ai-Driven <br />
					<Writter label="Cyber" /> <br /> Solutions
				</Heading>
			</Wrapper>
			<ServkceWrapper>
				<Container>
					<Slider items={[1, 2, 3, 4]} />
				</Container>
			</ServkceWrapper>
		</>
	);
};
export default HomeContainer;
