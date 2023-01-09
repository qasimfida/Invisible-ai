import styled, { css } from "styled-components";
export const StyledButton = styled.button`
	font-family: "Jura";
	font-weight: 700;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s all ease;
	height: ${({ size }) => (size === "xl" ? "68px" : "44px")};
	width: ${({ size }) => (size === "xl" ? "198px" : "124px")};
	font-size: ${({ size }) =>
		size === "xl" ? "19px" : size === "sm" ? "13px" : "14px"};
	border-radius: ${({ size }) => (size === "xl" ? "38px" : "22px")};
	${({ variant, theme: { colors } }) =>
		variant === "contained" &&
		css`
			background: ${colors.primary};
			color: ${colors.black};
			&:hover {
				background: ${colors.primary_light};
			}
		`}
	${({ variant, theme: { colors } }) =>
		variant === "outlined" &&
		css`
			background: transparent;

			border: 1px solid ${colors.primary};
			color: ${colors.white};
		`}
`;
