import Link from "next/link";
import styled, { css } from "styled-components";
// HEADER STYLED START
export const Header = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 26px 0;
`;
export const Navigation = styled.div`
	display: flex;
	align-items: center;
	.nav-icons {
		min-width: 18px;
	}
`;
export const NavLink = styled(Link)`
	font-family: "Jura";
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	padding: 0 32px;
	text-decoration: none;
	${({ theme: { colors } }) => css`
		color: ${colors.light_grey};
	`}
`;

// HEADER STYLED ENDS

// MUTAUL STYLES START
export const Img = styled.div`
	width: 123px;
	min-width: 123px;
	height: 32px;
	margin-right: 32px;
	img {
		position: absolute;
	}
`;
export const LayoutWrapper = styled.div`
	${({ theme: { colors } }) => css`
		background: ${colors.bg};
	`}
`;

// MUTAUL STYLES ENDS
