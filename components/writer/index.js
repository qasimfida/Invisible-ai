import { useEffect, useState } from "react";
import Typo from "./styles";

const Writter = ({ label = "" }) => {
	const [count, setCount] = useState(1);
	useEffect(() => {
		let timeout = setTimeout(() => {
			setCount((prev) => {
				if (prev === label.length) {
					return 1;
				} else return prev + 1;
			});
		}, 500);
		return () => {
			clearTimeout(timeout);
		};
	});
	return <Typo>{label.slice(0, count)}</Typo>;
};
export default Writter;
