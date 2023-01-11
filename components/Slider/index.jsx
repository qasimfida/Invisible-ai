import React, { useRef } from "react";
import { NextIcon, PrevIcon, Slick, SlickWrapper } from "./styles";

export default function Slider({ settings = {}, items, ...rest }) {
	const ref = useRef();
	let defaultSetting = {
		dots: false,
		infinite: true,
		speed: 700,
		slidesToShow: 5,
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
		    }
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
				<div class="slide">
					<div class="slideBackground">
				    </div>
				  <div class="slideContent">
					<img src="/images/categories/public-sector_icon.svg" />
					<h2>Public Sector</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/retail_icon.svg" />
					<h2>Retail</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/finance_icon.svg" />
					<h2>Finance</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/public-sector_icon.svg" />
					<h2>Public Sector</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/manufacturing_icon.svg" />
					<h2>Manufacturing</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/human-resources_icon.svg" />
					<h2>Human Resources</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
					<div class="slideBackground">
				    </div>
				  <div class="slideContent">
					<img src="/images/categories/public-sector_icon.svg" />
					<h2>Public Sector</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/retail_icon.svg" />
					<h2>Retail</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/finance_icon.svg" />
					<h2>Finance</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/public-sector_icon.svg" />
					<h2>Public Sector</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/manufacturing_icon.svg" />
					<h2>Manufacturing</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
				<div class="slide">
				  <div class="slideBackground">
				  </div>
				  <div class="slideContent">
					<img src="/images/categories/human-resources_icon.svg" />
					<h2>Human Resources</h2>
					<p>Invisible ai is a platform to eraly invest in Ai.</p>
					<a href="#"><img src="/images/icons/arrow.svg" /></a>
				  </div>	
				</div>
			</Slick>
		</SlickWrapper>
	);
}
