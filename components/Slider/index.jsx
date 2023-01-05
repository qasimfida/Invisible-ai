import React, { useRef } from "react";
import Slick from "react-slick";
import ServiceCard from "../ServiceCard";

export default function Slider({ settings = {}, ...rest }) {
	const ref = useRef();
	let defaultSetting = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
	};
	console.log(ref.current);
	const newSetting = Object.assign(defaultSetting, settings);
	return (
		<Slick ref={ref} {...newSetting} {...rest}>
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
			<ServiceCard />
		</Slick>
	);
}
