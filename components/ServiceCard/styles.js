import styled from "styled-components";

export const Wrapper = styled.div`
	background: ${(props) =>
		props.avtive
			? "linear-gradient(180deg, #0A0D16 0%, rgba(10, 13, 22, 0.97) 71.35%, rgba(10, 13, 22, 0.953043) 100%)"
			: `linear-gradient(
		180deg,
		#0a0d16 0%,
		rgba(10, 13, 22, 0.97) 71.35%,
		rgba(10, 13, 22, 0.953043) 100%
	)`};
	padding: 40px 24px;
`;
export const CardWrapper = styled.div`
	text-align: center;
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
	font-style: normal;
	font-weight: 700;
	font-size: 19px;
	line-height: 22px;
	margin-top: 20px;

	color: ${({ theme: { colors } }) => colors.white};
`;
export const Description = styled.p`
	font-family: "Jura";
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 20px;
	margin: 8px auto 60px auto;

	color: ${({ theme: { colors } }) => colors.white};
`;
export const Button = styled.button`
	width: 46px;
	height: 46px;
	border-radius: 50%;
	background: #ffffff;
`;
