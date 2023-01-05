import { useState, useEffect } from "react";

const getWindowDimensions = () => {
	if (typeof window === "undefined") {
		return { width: 0, height: 0 };
	}
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
};

const useDimension = () => {
	const [dimensions, setDimensions] = useState(getWindowDimensions());
	useEffect(() => {
		function handleResize() {
			setDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return dimensions;
};
export default useDimension;
