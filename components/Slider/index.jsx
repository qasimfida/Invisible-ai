import React, { useRef } from "react";
import { NextIcon, PrevIcon, Slick, SlickWrapper } from "./styles";

export default function Slider({ settings = {}, items, ...rest }) {
	const ref = useRef();
	let defaultSetting = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		arrows: false,
		padding: 40,
	};
	const newSetting = Object.assign(defaultSetting, settings);
	const handleNext = () => {
		ref.current.slickNext();
	};
	const handlePrev = () => {
		ref.current.slickPrev();
	};
	return (
		<SlickWrapper>
			<PrevIcon onClick={handlePrev} />
			<NextIcon onClick={handleNext} />
			<Slick ref={ref} {...newSetting} {...rest}>
				<div>1</div>
				<div>2</div>
				<div>3</div>
				<div>4</div>
				<div>5</div>
				<div>6</div>
			</Slick>
		</SlickWrapper>
	);
}
