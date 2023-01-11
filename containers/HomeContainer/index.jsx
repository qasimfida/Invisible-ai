import Image from "next/image";
import {
	Icon1,
	Icon2,
	Icon3,
	Icon4,
	Icon5,
} from "../../components/Icons/service-icons";
import Container from "../../components/Layout/container";
import Slider from "../../components/Slider";
import Writter from "../../components/writer";
import {
	Wrapper,
	Heading,
	ServiceWrapper,
	Para,
	Content,
	Img,
	CircleIcon,
	SubTitle,
	Desc,
	Flex,
	SemiCircleIcon,
	BrowseIcon,
	Browser,
	MainHeading,
	MainPara,
	SliderWrapper,
	BlurBg,
} from "./styles";
const HomeContainer = () => {
	const services = [
		{
			title: "Retail",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon2,
		},
		{
			title: "Finance",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon1,
		},
		{
			title: "Manufacturing",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon3,
		},
		{
			title: "Human Resources",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon4,
		},
		{
			title: "Manufacturing",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon3,
		},
		{
			title: "Public sector",
			desc: "Invisible ai is a pltaform to early invest in Ai.",
			icon: Icon5,
		},
	];
	return (
		<div>
			<Wrapper>
				<Content>
					<Heading>
						<CircleIcon />
						Ai-Driven <br />
						<Writter label="Cyber" /> <br /> Solutions
					</Heading>
					<Para>
						Invisible ai is a pltaform to early invest in Ai. Invest in your
						favourite category.
					</Para>
					<Flex>
						<div>
							<SubTitle>350+</SubTitle>
							<Desc>Parteners</Desc>
						</div>
						<SemiCircleIcon />
						<div>
							<SubTitle>72%+</SubTitle>
							<Desc>Faster Technology</Desc>
						</div>
					</Flex>
					<Browser>
						<span>
							<BrowseIcon />
						</span>
						Browse categories
					</Browser>
				</Content>
				<Img>
					<Image src="/images/robot.png" fill alt="robot" />
				</Img>
			</Wrapper>
			<ServiceWrapper>
				<MainHeading>Our Categories</MainHeading>
				<MainPara>
					Invisible ai is a pltaform to early invest in Ai. Invest in your
					favourite category.
				</MainPara>
				<Container>
					<SliderWrapper>
						<BlurBg />
						<Slider />
					</SliderWrapper>
				</Container>
			</ServiceWrapper>
		</div>
	);
};
export default HomeContainer;
