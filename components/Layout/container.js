import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	margin-left: auto;
	box-sizing: border-box;
	margin-right: auto;
	display: block;
	padding-left: 16px;
	padding-right: 16px;
	overflow-x: hidden;
	@media (min-width: ${({ theme: { breakPoints } }) => breakPoints.xs}px) {
		padding-left: 24px;
		padding-right: 24px;
	}
	@media (min-width: ${({ theme }) => theme.container}px) {
		// max-width: ${({ theme }) => theme.container}px;
		max-width: 100vw;
		padding-left: 7.36vw;
		padding-right: 7.36vw;
	} ;
`;

export default Container;
