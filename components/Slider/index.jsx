import React, { useRef } from "react";
import ServiceCard from "../ServiceCard";
import { NextIcon, PrevIcon, Slick, SlickWrapper } from "./styles";

export default function Slider({ settings = {}, items, ...rest }) {
	const ref = useRef();
	let slidesToShow = 5;

	if (items.length < 5) {
	  slidesToShow = items.length;
	}

	let defaultSetting = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: slidesToShow,
		slidesToScroll: 1,
		centerMode: true,
		arrows: false,
		padding: 40,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
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
				{items.map((i, ind) => {
					return (
						<ServiceCard key={ind + 1} {...i}>
							<i.icon />
						</ServiceCard>
					);
				})}
			</Slick>
		</SlickWrapper>
	);
}
