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
		transition: opacity 0.7s ease, transform 0.7s ease, transform-origin 0.7s ease;
		// height: 350px;
		// transform-origin: top center;
		// background: linear-gradient(180deg, #0A0D16 0%, rgba(10, 13, 22, 0.97) 71.35%, rgba(10, 13, 22, 0.953043) 100%);
	}

	.slideBackground {
		// transition: transform 0.7s ease, height 0.7s ease, scale 0.7s ease, width 0.7s ease;
		// transition: all 0.7s ease;
		transform-origin: top center;
		background: linear-gradient(180deg, #0A0D16 0%, rgba(10, 13, 22, 0.97) 71.35%, rgba(10, 13, 22, 0.953043) 100%);
	    position: absolute;
	    z-index: -1;
	    height: 100%;
	    width: 100%;
	}

	.slideBackground:after {
		// transition: transform 0.7s ease;
	}

	.slideBackground:before {
		// transition: transform 0.7s ease;
	}

	.slideContent {
		transition: transform 0.7s ease, height 0.7s ease;
	}

	.slick-slide:not(.slick-active) {
		opacity: 0;
		height: 310px;
    	width: 195px !important;
	}

	.slick-slide.slick-active {
		opacity: 0.5;
	}

	.slick-slide.slick-active.slick-center .slideBackground{
		height: 100%;
	}

	.slick-slide.slick-active .slideBackground:before {
		content: "";
		position: absolute;
	    width: 99%;
    	height: 96%;
	    transform: translateY(-2px) perspective(10px) rotateX(0.3deg);
    	scale: 1.05;
	    box-sizing: content-box;
	    border: 2px solid #0A0E16;
	}

	.slick-slide.slick-active .slideBackground:before,
	.slick-slide.slick-active .slideBackground:after {
		z-index: -1;
	}

	.slick-slide.slick-active.slick-center {
		height: 310px;
		width: 185px !important;
		opacity: 1;
	}
	.slick-slide.slick-active.slick-center .slideBackground {
		transform: perspective(10px) rotateX(0.5deg) rotateZ(2.3deg) skewY(1deg) skewX(0.7deg) scaleY(0.8);
	}

	.slick-slide.slick-active.slick-center .slideBackground:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-50%) skewY(-20deg);
	}

	.slick-slide.slick-active.slick-center + .slick-slide,
	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) {
		height: 310px;
		width: 190px !important;

	}

	.slick-slide.slick-active.slick-center + .slick-slide .slideBackground:before {
		content: "";
		position: absolute;
	    width: 97%;
    	height: 110%;
	    transform: translateY(-29px) perspective(50px) rotateX(0.3deg) rotateY(-3.2deg) skewY(-9deg);
    	scale: 1;
	    box-sizing: content-box;
	    border: 2px solid #0A0E16;
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slideBackground {
		transform: perspective(10px) rotateX(0.2deg) rotateZ(2deg) skewY(6deg) skewX(-2deg) translateY(-5px);
		transform-origin: 80% 75%;
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slideBackground:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(-17deg);
	}

	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) .slideBackground:before {
		content: "";
		position: absolute;
	    width: 80%;
    	height: 110%;
	    transform: translateY(-23px) perspective(50px) rotateX(-0.3deg) rotateY(3.2deg) skewY(9deg);
    	scale: 1;
	    box-sizing: content-box;
	    border: 2px solid #0A0E16;
	}

	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) .slideBackground {
		transform: perspective(10px) rotateX(0.2deg) rotateZ(-2deg) skewY(-6deg) skewX(2deg) translateX(-10px) translateY(-5px);
		transform-origin: 20% 75%;
	}

	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) .slideBackground:after {
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

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide .slideBackground:before {
		content: "";
		position: absolute;
	    width: 97%;
    	height: 110%;
	    transform: translateY(-29px) perspective(50px) rotateX(0.3deg) rotateY(-3.2deg) skewY(-9deg);
    	scale: 1;
	    box-sizing: content-box;
	    border: 2px solid #0A0E16;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide .slideBackground {
		transform: perspective(30px) rotateX(0.5deg) rotateZ(20deg) skewX(2deg) skewY(2deg) translateY(65px);
		transform-origin: right center;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide .slideBackground:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(-17deg);
	}

	.slick-active:not(.slick-active ~ .slick-active) .slideBackground:before {
		content: "";
		position: absolute;
	    width: 80%;
    	height: 110%;
	    transform: translateY(-23px) perspective(50px) rotateX(-0.3deg) rotateY(3.2deg) skewY(9deg);
    	scale: 1;
	    box-sizing: content-box;
	    border: 2px solid #0A0E16;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slideBackground {
		transform: perspective(30px) rotateX(0.5deg) rotateZ(-20deg) skewX(-2deg) skewY(-2deg) translateY(60px) translateX(-20px);
		transform-origin: left center;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slideBackground:after {
		content: "";
		width: 100%;
		position: absolute;
		height: 30%;
		top: 0;
		background: inherit;
		transform: translateY(-45%) skewY(17deg);
	}

	.slick-slide:not(.slick-active) .slideBackground {
		// background: linear-gradient(180deg, #0A0D16 0%, rgba(10, 13, 22, 0.97) 71.35%, rgba(10, 13, 22, 0.953043) 100%);
		transform: perspective(10px) rotateX(0.5deg);
		scale: 0.66;
	}

	.slide  {
		display: flex !important;
		justify-content: center;
		flex-direction: column;
	}

	.slick-slide > div,
	.slick-slide .slide {
		height: 100%;
		width: 100%;
		position: relative;
		transition: height 0.7s ease;
	}

	.slideContent {
		padding-bottom: 34px;
		color: white;
		font-family: 'Jura';
		display: flex !important;
		flex-direction: column;
		height: 100%;
		align-items: center;
		box-sizing: border-box;
		// justify-content: space-evenly;
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slideContent, 
	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) .slideContent {
		width: 90%;
	    transform: rotateZ(-4deg);
	}

	.slick-slide.slick-active.slick-center + .slick-slide .slideContent {
		margin-left: auto;
		margin-right: 0;
		transform: rotateZ(4deg);
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide .slideContent {
		// padding-top: 40px;
		padding: 0;
		width: 90%;
		margin: 0 auto;
		transform: rotateZ(18deg);
		height: 80%;
	}

	.slick-active:not(.slick-active ~ .slick-active) .slideContent {
		padding-top: 40px;
		width: 90%;
		transform: rotateZ(-18deg);
	}

	.slick-active.slick-center .slideContent{
		height: 90%;
		padding-bottom: 0;
	}

	.slick-slide:not(.slick-active) {
		transition: all 0s linear 0.7s, opacity 0.7s ease;
	}

	.slideContent > img {
		object-fit: cover;
		transition: height 0.7s ease, width 0.7s ease, margin 0.7s ease;
		height: 50px;
	}

	.slick-active.slick-center .slideContent > img {
		height: 68px;
	}

	.slideContent h2 {
		padding-top: 20px;
		padding-bottom: 8px;
		font-size: 22px;
		text-align: center;
		transition: scale 0.7s ease;
		scale: 1;
	}

	.slick-slide.slick-active.slick-center + .slick-slide h2, 
	.slick-active + .slick-active:not(.slick-active.slick-center):not(.slick-center + .slick-active + .slick-active):not(.slick-center + .slick-active) h2 {
		// font-size: 19px;
		scale: 0.86;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide h2, 
	.slick-active:not(.slick-active ~ .slick-active) h2 {
		// font-size: 16px;
		scale: 0.72;
	}

	.slideContent p {
		font-size: 14px;
		scale: 1;
		text-align: center;
		transition: scale 0.7s ease;
	}

	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide p, 
	.slick-active:not(.slick-active ~ .slick-active) p {
		// font-size: 12px;
		height: 68px;
		scale: 0.86;
	}

	.slideContent a {
		display: inline-flex;
		width: 46px;
		height: 46px;
		background-color: white;
		border-radius: 100%;
		margin-top: auto
	}

	.slick-slide.slick-active.slick-center .slideContent a,
	.slick-slide.slick-active.slick-center + .slick-slide .slideContent a,
	.slick-slide.slick-active.slick-center + .slick-slide + .slick-slide .slideContent a{
		transform: rotateZ(10deg);
	}

	.slideContent a img {
		margin: auto;
		vertical-align: middle;
		object-fit: contain;
	}

	.slick-slide:not(.slick-active) .slideBackground,
	.slick-slide:not(.slick-active) .slideBackground:before,
	.slick-slide:not(.slick-active) .slideBackground:after,
	.slick-slide:not(.slick-active) .slideContent {
		transition: all 0s linear 0.7s, opacity 0.7s ease 0s;
	}

	@media (max-width: 1024px) {
		.slideBackground,
		.slideBackground:before,
		.slideBackground:after,
		.slideContent {
			transition: all 0.7s ease;
		}
	}

`;
