import { ArrowRight } from "../Icons";
import {
	Button,
	CardWrapper,
	Description,
	Icon,
	Title,
	Wrapper,
} from "./styles";
const ServiceCard = ({ title, desc, children, onClick, ...rest }) => {
	return (
		<Wrapper {...rest}>
			<CardWrapper>
				<div>
					<Icon>{children}</Icon>
					<Title>{title || "title"}</Title>
					<Description>{desc || "description"}</Description>
				</div>
				<Button>
					<ArrowRight size={20} />
				</Button>
			</CardWrapper>
		</Wrapper>
	);
};
export default ServiceCard;
