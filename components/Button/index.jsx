import { StyledButton } from "./styles";

const Button = ({ children, size, variant = "contained", ...rest }) => {
	return (
		<StyledButton size={size} variant={variant} {...rest}>
			{children}
		</StyledButton>
	);
};
export default Button;
