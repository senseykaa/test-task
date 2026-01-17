import { StyledButton } from "./styles";

export type ButtonProps = {
	variant?: "orange" | "blue" | "dark";
	size?: "S" | "M" | "L";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, variant = "orange", size = "M", ...props }: ButtonProps) => {
	return (
		<StyledButton $variant={variant} $size={size} {...props}>
			{children}
		</StyledButton>
	);
};
