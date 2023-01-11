import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
	text-align: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	padding: 0 4px 34px;
	transition: transform 0.7s ease, height 0.7s ease;
	padding-bottom: 34px;
`;
export const Wrapper = styled.div`
	height: 308px;
	margin: 30px 0;
	box-sizing: border-box;
	padding: 4px;
	display: flex !important;
	justify-content: center;
	flex-direction: column;
	.slide-background {
		transform-origin: top center;
		background: linear-gradient(
			180deg,
			#0a0d16 0%,
			rgba(10, 13, 22, 0.97) 71.35%,
			rgba(10, 13, 22, 0.953043) 100%
		);
		position: absolute;
		z-index: -1;
		height: 100%;
		width: 100%;
	}
	.slick-slide.slick-active .slide-background:before,
	.slick-slide.slick-active .slide-background:after {
		z-index: -1;
	}
`;
export const Icon = styled.div`
	height: auto;
	width: 100px;
	margin: 0 auto;
	svg {
		margin: 0 auto;
	}
`;
export const Title = styled.h3`
	font-family: "Jura";
	font-weight: 700;
	font-size: 22px;
	line-height: 19px;
	margin-top: 20px;
	color: ${({ theme: { colors } }) => colors.white};
	transition: scale 0.7s ease;
	scale: 1;
`;
export const Description = styled.p`
	font-family: "Jura";
	font-weight: 300;
	font-size: 14px;
	line-height: 19px;
	margin: 8px auto;
	color: ${({ theme: { colors } }) => colors.white};
	scale: 1;
	transition: scale 0.7s ease;
`;
export const Button = styled.button`
	width: 46px;
	height: 46px;
	border-radius: 50%;
	background: ${({ theme: { colors } }) => colors.white};
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	transition: 0.2s all ease-in;
	&:hover {
		transform: scale(1.1);
	}
	svg {
		margin-top: -3px;
	}
`;
