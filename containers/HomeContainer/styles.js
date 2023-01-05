import styled from "styled-components";

export const Wrapper = styled.div``;
export const ServkceWrapper = styled.div`
	background-color: ${({ theme: { colors } }) => colors.white};
`;
export const Heading = styled.h2`
	font-weight: 700;
	font-size: 89px;
	line-height: 105px;
	color: ${({ theme: { colors } }) => colors.white};
`;
