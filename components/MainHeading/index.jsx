import React from "react";
import { HeadingWrapper } from "./styles";

const MainHeading = ({ className, children }) => {
	return <HeadingWrapper className={className}>{children}</HeadingWrapper>;
};

export default MainHeading;
