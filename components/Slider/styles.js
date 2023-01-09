import Slider from "react-slick";
import styled from "styled-components";
import { AngleLeft, AngleRight } from "../Icons";
export const Card = styled.div`
	width: ${({ width }) => width || "100%"};
	display: block;
	background: red;
	position: relative;
	float: left;
`;
export const SlickWrapper = styled.div`
	position: relative;
`;
export const PrevIcon = styled(AngleLeft)`
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
`;
export const NextIcon = styled(AngleRight)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
`;
export const Wrapper = styled.div`
	overflow: hidden;
	display: block;
`;
export const SlidesWrapper = styled.div`
	position: relative;
	top: 0;
	left: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: ${(props) => props.width || "100vw"};
	transform: translateX(${(props) => props.transform + "px"});
`;

export const Slick = styled(Slider)`
	margin: 0 60px;
	.slick-list {
		padding-top: 50px;
	}
`;
