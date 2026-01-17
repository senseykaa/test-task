import styled from "styled-components";
import { mediaMax } from "styles/media";

export const Container = styled.div`
	background: linear-gradient(
		to right,
		var(--color-blue) 0%,
		var(--color-dark) 50%,
		var(--color-blue) 100%
	);
`;

export const Inner = styled.div`
	max-width: var(--container);
	margin: 0 auto;
	height: 84px;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Logo = styled.img`
	width: 70px;
	margin-left: -12px;
`;

export const WrapperLogo = styled.div`
	display: flex;
	align-items: center;

	h1 {
		font-size: 30px;
		font-weight: 700;
		text-transform: uppercase;

		span {
			color: var(--secondary-color);
		}

		${mediaMax.laptopLarge`
			font-size: 20px;
		`}

		${mediaMax.laptop`
			font-size: 18px;
		`}
	}
`;

export const WrapperInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	a {
		color: var(---primary-color);
	}

	${mediaMax.tablet`
		display: none;
	`}
`;

export const Lists = styled.ul`
	display: flex;
	align-items: center;
	gap: 30px;
	list-style: none;
	font-size: 16px;
	margin-right: 10px;
	padding: 0;
	margin: 0;

	${mediaMax.laptop`
		display: none;
	`}
`;

export const ListItem = styled.li<{ $isActive: boolean }>`
	cursor: pointer;
	color: ${({ $isActive }) => ($isActive ? "var(--color-orange)" : "var(--primary-color)")};
	font-weight: ${({ $isActive }) => ($isActive ? "700" : "400")};
	position: relative;
	transition: all 0.3s ease;

	&::after {
		content: "";
		position: absolute;
		bottom: -5px;
		left: 0;
		width: ${({ $isActive }) => ($isActive ? "100%" : "0")};
		height: 2px;
		background: var(--color-orange);
		transition: width 0.3s ease;
	}

	&:hover {
		color: var(--color-orange);
		&::after {
			width: 100%;
		}
	}
`;

export const WrapperPhone = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;

	p {
		opacity: 0.8;
		font-size: 14px;
	}
`;

export const Phone = styled.div`
	font-size: 20px;
	font-weight: 700;
`;

export const PhoneCall = styled.img`
	width: 35px;
`;

export const InnerPhone = styled.div`
	${mediaMax.tablet`
		display: none;
	`}
`;

export const Burger = styled.div<{ $isOpen: boolean }>`
	display: none;
	flex-direction: column;
	justify-content: space-around;
	width: 30px;
	height: 25px;
	background: transparent;
	border: none;
	cursor: pointer;
	z-index: 100;
	position: relative;

	div {
		width: 30px;
		height: 3px;
		background: var(--primary-color);
		border-radius: 10px;
		transition: all 0.3s linear;
		position: absolute;
		left: 0;
		transform-origin: center;

		&:first-child {
			top: ${({ $isOpen }) => ($isOpen ? "11px" : "0")};
			transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
		}

		&:nth-child(2) {
			top: 11px;
			opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
			transform: ${({ $isOpen }) => ($isOpen ? "translateX(20px)" : "translateX(0)")};
		}

		&:nth-child(3) {
			top: ${({ $isOpen }) => ($isOpen ? "11px" : "22px")};
			transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
		}
	}

	${mediaMax.tablet`
		display: flex;
	`}
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
	display: none;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: var(--color-dark);
	transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
	height: 100vh;
	width: 100%;
	text-align: left;
	position: fixed;
	top: 0;
	left: 0;
	transition: transform 0.3s ease-in-out;
	z-index: 99;

	${mediaMax.tablet`
		display: flex;
	`}

	ul {
		flex-direction: column;
		display: flex;
		gap: 30px;
		margin-bottom: 40px;
	}
`;

export const WrapperInfoMobile = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;
	position: fixed;
	bottom: 15px;

	a {
		color: var(--primary-color);
	}
`;
