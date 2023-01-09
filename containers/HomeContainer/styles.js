import styled, { keyframes } from "styled-components";
import { ArrowRight, Circle, SemiCircle } from "../../components/Icons";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding-left: 100px;
	position: relative;
`;
export const ServiceWrapper = styled.div`
	padding: 146px 0;
	background-color: ${({ theme: { colors } }) => colors.dark};
`;
export const Heading = styled.h2`
	font-weight: 700;
	font-size: 89px;
	line-height: 105px;
	color: ${({ theme: { colors } }) => colors.white};
	position: relative;
	margin-top: 160px;
`;
export const Para = styled.p`
	font-family: "Jura";
	font-weight: 300;
	font-size: 28px;
	line-height: 37px;
	max-width: 550px;
	margin-top: 14px;
	color: ${({ theme: { colors } }) => colors.white};
`;
export const Content = styled.div`
	max-width: 660px;
	width: 100%;
`;
export const Img = styled.div`
	max-width: 930px;
	width: 100%;
	overflow: hidden;
	min-height: 100%;
	position: relative;
`;
export const CircleIcon = styled(Circle)`
	position: absolute;
	left: -70px;
	top: -45px;
	transform: rotate(8.04deg);
`;
export const Flex = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 92px;
	margin-bottom: 74px;
	text-align: center;
	color: ${({ theme: { colors } }) => colors.white};
`;
export const SubTitle = styled.h4`
	font-family: "Jura";
	font-weight: 500;
	font-size: 53px;
	line-height: 37px;
	margin-bottom: 10px;
`;
export const Desc = styled.p`
	font-family: "Jura";
	font-weight: 300;
	font-size: 18px;
	line-height: 37px;
`;
export const SemiCircleIcon = styled(SemiCircle)`
	padding: 0 60px;
`;
export const BrowseIcon = styled(ArrowRight)`
	transform: rotate(-180deg);
`;
const bounce = keyframes`
	0% {
		transform: scale(1);
	}
	50% {
		transform: scale(0.9);
	}
	100% {
		transform: scale(1);
	};
`;
export const Browser = styled.button`
	margin-bottom: 60px;
	background: none;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	font-family: "Jura";
	font-weight: 700;
	font-size: 18px;
	line-height: 15px;
	color: ${({ theme: { colors } }) => colors.white};
	span {
		background: ${({ theme: { colors } }) => colors.white};
		border-radius: 50%;
		height: 46px;
		width: 46px;
		margin-right: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&:hover span {
		animation-name: ${bounce};
		animation-duration: 0.5s;
		animation-iteration-count: infinite;
	}
`;
export const MainHeading = styled.h3`
	font-family: "Jura";
	font-weight: 700;
	font-size: 65px;
	line-height: 77px;
	text-align: center;
	color: ${({ theme: { colors } }) => colors.white};
`;
export const MainPara = styled.p`
	font-family: "Jura";
	font-weight: 300;
	font-size: 22px;
	line-height: 34px;
	text-align: center;
	max-width: 434px;
	margin: 24px auto 50px auto;
	color: ${({ theme: { colors } }) => colors.white};
`;

export const SliderWrapper = styled.div`
	position: relative;
	padding: 50px;
`;
export const BlurBg = styled.div`
	position: absolute;
	width: 360px;
	height: 360px;
	left: 55%;
	top: 0;
	background: rgba(50, 160, 200, 0.05);
	filter: blur(36.5px);
`;
