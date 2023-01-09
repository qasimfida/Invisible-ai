import styled, { css } from "styled-components";

export const CardWrapper = styled.div`
	text-align: center;
	box-sizing: border-box;
	padding: 40px 24px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;
export const Wrapper = styled.div`
	height: 308px;
	margin: 30px 0;
	box-sizing: border-box;
	padding: 4px;
	border: 3px solid ${({ theme: { colors } }) => colors.border};
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
	font-size: 16px;
	line-height: 19px;
	margin-top: 20px;
	color: ${({ theme: { colors } }) => colors.white};
`;
export const Description = styled.p`
	font-family: "Jura";
	ffont-weight: 300;
	font-size: 12px;
	line-height: 19px;
	margin: 8px auto;
	color: ${({ theme: { colors } }) => colors.white};
`;
export const Button = styled.button`
	width: 34px;
	height: 34px;
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
