import styled, { keyframes } from "styled-components";
const transform = keyframes`
	"0%": {
		transform: scale(0);
	};
	"100%": {
		transform: scale(1);
	}
	`;
const Typo = styled.span`
	position: relative;
	transition: 0.2s all ease;
	text-align: left;
	padding-right: 8px;
	display: inline-block;
	color: ${({ theme: { colors } }) => colors.primary};
	&::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 2px;
		background: ${({ theme: { colors } }) => colors.primary};
		right: 0;
		top: 0;
		transition: 0.2s all ease;
		animation-name: ${transform};
	}
`;

export default Typo;
