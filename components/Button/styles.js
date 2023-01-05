import styled, { css } from "styled-components";
export const StyledButton = styled.button`
	height: 44px;
	width: ${({ size }) => (size === "xl" ? "198px" : "124px")};
	font-size: ${({ size }) =>
		size === "xl" ? "19px" : size === "sm" ? "13px" : "14px"};
	box-sizing: border-box;
	border-radius: 22px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s all ease;
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
			border: 1px solid ${colors.primary};
			color: ${colors.white};
		`}
`;
