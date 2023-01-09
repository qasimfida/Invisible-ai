import styled from "styled-components";

export const HeadingWrapper = styled.h2`
	font-family: "Jura";
	font-style: normal;
	font-weight: 700;
	font-size: 89px;
	line-height: 105px;
	color: ${({ theme: { colors } }) => colors.white};
	@media (max-width: 768px) {
		font-size: 40px;
		line-height: 60px;
	} ;
`;
