import { CardWrapper, Description, Icon, Title, Wrapper } from "./styles";
import Image from "next/image";
import { Icon1 } from "../Icons/service-icons";
const ServiceCard = ({ title, description, icon, onClick, ...rest }) => {
	return (
		<Wrapper {...rest}>
			<CardWrapper>
				<Icon>
					<Icon1 />
				</Icon>
				<Title>{title || "title"}</Title>
				<Description>{description || "description"}</Description>
			</CardWrapper>
		</Wrapper>
	);
};
export default ServiceCard;
