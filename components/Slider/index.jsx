import React, { useRef } from "react";
import { NextIcon, PrevIcon, Slick, SlickWrapper } from "./styles";
import ServiceCard from "../ServiceCard";

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
				{items.map((item, ind) => {
					return (
						<ServiceCard
							index={ind}
							key={item.title}
							title={item.title}
							desc={item.desc}
						>
							<item.icon />
						</ServiceCard>
					);
				})}
			</Slick>
		</SlickWrapper>
	);
}
