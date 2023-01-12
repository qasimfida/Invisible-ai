import Slider from "react-slick";
import styled from "styled-components";
import { AngleLeft, AngleRight } from "../Icons";
export const Card = styled.div`
	width: ${({ width }) => width || "100%"};
	display: block;
	background: red;
	position: relative;
	float: left;
`;
export const SlickWrapper = styled.div`
	position: relative;

	@media(min-width: 1440px) {
		.showOnlyFourSlides .slick-active:not(.slick-active ~ .slick-active) {
			opacity: 0 !important;
		}
	}
`;
export const PrevIcon = styled(AngleLeft)`
	position: absolute;
	left: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
`;
export const NextIcon = styled(AngleRight)`
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	z-index: 1;
`;
export const Wrapper = styled.div`
	overflow: hidden;
	display: block;
`;
export const SlidesWrapper = styled.div`
	position: relative;
	top: 0;
	left: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: ${(props) => props.width || "100vw"};
	transform: translateX(${(props) => props.transform + "px"});
`;

export const Slick = styled(Slider)`
	margin: 30px auto;
	max-width: 295px;

	@media (min-width: 1024px) {
		margin: 55px auto;
		max-width: 685px;
	}

	@media (min-width: 1440px) {
		max-width: 1075px;
	}

	.slick-list {
		padding-top: 50px;
		overflow: visible;
	}

	.slick-slide {
		transition: opacity 0.7s ease, transform 0.7s ease,
			transform-origin 0.7s ease;
	}

	.slick-slide:not(.slick-active) {
		opacity: 0;
		height: 310px;
		width: 195px !important;
	}

	.slick-slide.slick-active {
		opacity: 0.5;
	}

	.slick-slide.slick-active.slick-center .slide-background {
		height: 100%;
	}

	.slick-slide.slick-active .slide-background:before {
		content: "";
		position: absolute;
		width: 99%;
		height: 96%;
		transform: translateY(-2px) perspective(10px) rotateX(0.3deg);
		scale: 1.05;
		box-sizing: content-box;
		border: 2px solid #0a0e16;
	}
	.slick-slide.slick-active.slick-center {
		height: 310px;
		width: 185px !important;
		opacity: 1;
		.slide-background {
			transform: perspective(10px) rotateX(0.5deg) rotateZ(2.3deg) skewY(1deg)
				skewX(0.7deg) scaleY(0.8);
		}

		.slide-background:after {
			content: "";
			width: 100%;
			position: absolute;
			height: 30%;
			top: 0;
			background: inherit;
			transform: translateY(-50%) skewY(-20deg);
		}
	}

	.slick-slide.slick-active.slick-center + .slick-slide,
	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active) {
		height: 310px;
		width: 190px !important;
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		.slide-background:before {
		content: "";
		position: absolute;
		width: 97%;
		height: 110%;
		transform: translateY(-29px) perspective(50px) rotateX(0.3deg)
			rotateY(-3.2deg) skewY(-9deg);
		scale: 1;
		box-sizing: content-box;
		border: 2px solid #0a0e16;
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slide-background {
		transform: perspective(10px) rotateX(0.2deg) rotateZ(2deg) skewY(6deg)
			skewX(-2deg) translateY(-5px);
		transform-origin: 80% 75%;
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		.slide-background:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(-17deg);
	}

	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active)
		.slide-background:before {
		content: "";
		position: absolute;
		width: 80%;
		height: 110%;
		transform: translateY(-23px) perspective(50px) rotateX(-0.3deg)
			rotateY(3.2deg) skewY(9deg);
		scale: 1;
		box-sizing: content-box;
		border: 2px solid #0a0e16;
	}

	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active)
		.slide-background {
		transform: perspective(10px) rotateX(0.2deg) rotateZ(-2deg) skewY(-6deg)
			skewX(2deg) translateX(-10px) translateY(-5px);
		transform-origin: 20% 75%;
	}

	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active)
		.slide-background:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(17deg);
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide,
	.slick-active:not(.slick-active ~ .slick-active) {
		height: 310px;
		width: 195px !important;
		scale: 0.82;
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		+ .slick-slide
		.slide-background:before {
		content: "";
		position: absolute;
		width: 97%;
		height: 110%;
		transform: translateY(-29px) perspective(50px) rotateX(0.3deg)
			rotateY(-3.2deg) skewY(-9deg);
		scale: 1;
		box-sizing: content-box;
		border: 2px solid #0a0e16;
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		+ .slick-slide
		.slide-background {
		transform: perspective(30px) rotateX(0.5deg) rotateZ(20deg) skewX(2deg)
			skewY(2deg) translateY(65px);
		transform-origin: right center;
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		+ .slick-slide
		.slide-background:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(-17deg);
	}

	.slick-active:not(.slick-active ~ .slick-active) .slide-background:before {
		content: "";
		position: absolute;
		width: 80%;
		height: 110%;
		transform: translateY(-23px) perspective(50px) rotateX(-0.3deg)
			rotateY(3.2deg) skewY(9deg);
		scale: 1;
		box-sizing: content-box;
		border: 2px solid #0a0e16;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slide-background {
		transform: perspective(30px) rotateX(0.5deg) rotateZ(-20deg) skewX(-2deg)
			skewY(-2deg) translateY(60px) translateX(-20px);
		transform-origin: left center;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slide-background:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(17deg);
	}

	.slick-slide:not(.slick-active) .slide-background {
		transform: perspective(10px) rotateX(0.5deg);
		scale: 0.66;
	}

	.slick-slide > div,
	.slick-slide .slide {
		height: 100%;
		width: 100%;
		position: relative;
		transition: height 0.7s ease;
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slide-content,
	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active)
		.slide-content {
		width: 90%;
		transform: rotateZ(-4deg);
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slide-content {
		margin-left: auto;
		margin-right: 0;
		transform: rotateZ(4deg);
	}

	.slick-slide.slick-active.slick-center
		+ .slick-slide
		+ .slick-slide
		.slide-content {
		padding: 0;
		width: 90%;
		margin: 0 auto;
		transform: rotateZ(18deg);
		height: 80%;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slide-content {
		padding-top: 40px;
		width: 90%;
		transform: rotateZ(-18deg);
	}

	.slick-active.slick-center .slide-content {
		height: 90%;
		padding-bottom: 0;
	}

	.slick-slide:not(.slick-active) {
		transition: all 0s linear 0.7s, opacity 0.7s ease;
	}
	.slick-slide.slick-active.slick-center + .slick-slide h2,
	.slick-active
		+ .slick-active:not(.slick-active.slick-center):not(
			.slick-center + .slick-active + .slick-active
		):not(.slick-center + .slick-active)
		h2 {
		scale: 0.86;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide h2,
	.slick-active:not(.slick-active ~ .slick-active) h2 {
		scale: 0.72;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide p,
	.slick-active:not(.slick-active ~ .slick-active) p {
		height: 68px;
		scale: 0.86;
	}

	.slick-slide.slick-active.slick-center .slide-content a,
	.slick-slide.slick-active.slick-center + .slick-slide .slide-content a,
	.slick-slide.slick-active.slick-center
		+ .slick-slide
		+ .slick-slide
		.slide-content
		a {
		transform: rotateZ(10deg);
	}

	.slick-slide:not(.slick-active) .slide-background,
	.slick-slide:not(.slick-active) .slide-background:before,
	.slick-slide:not(.slick-active) .slide-background:after,
	.slick-slide:not(.slick-active) .slide-content {
		transition: all 0s linear 0.7s, opacity 0.7s ease 0s;
	}

	@media (max-width: 1024px) {
		.slide-background,
		.slide-background:before,
		.slide-background:after,
		.slide-content {
			transition: all 0.7s ease;
		}
	}
`;
