import styled from "styled-components";
export const Card = styled.div`
	width: ${({ width }) => width || "100%"};
	display: block;
	background: red;
	position: relative;
	float: left;
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
