import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaMax } from "styles/media";

export const Container = styled.div`
	max-width: var(--container);
	margin: 0 auto;
	padding: 0 20px;
	position: relative;
`;

export const PlumberImage = styled.img`
	position: absolute;
	right: 2%;
	bottom: -100px;
	height: 550px;
	width: auto;
	z-index: 10;
	pointer-events: none;

	${mediaMax.laptop`
		height: 450px;
	`}

	${mediaMax.tablet`
		height: 350px;
	`}
`;

export const Line = styled.div`
	width: 100%;
	height: 4px;
	background: linear-gradient(
		to right,
		transparent 0%,
		var(--color-line) 35%,
		var(--color-line) 65%,
		transparent 100%
	);
`;

export const HeaderBanner = styled.div`
	position: relative;
`;

export const WrapperImage = styled.div`
	width: 100%;
	height: calc(100vh - 370px);
	position: relative;
	overflow: hidden;

	${mediaMax.laptop`
    height: 480px;
  `}

	${mediaMax.tablet`
    height: 350px;

		&::after {
			content: "";
			position: absolute;
			left: 0;
			width: 100%;
			height: 4px;
			background: linear-gradient(to right, transparent 0%, var(--color-line) 35%, var(--color-line) 65%, transparent 100%);
		}
  `}
`;

export const BgImageRight = styled.div`
	height: 100%;
	position: relative;

	${mediaMax.tablet`
    margin-left: 0;
  `}
`;

export const ContainerImage = styled.div`
	display: inline-block;
	position: absolute;
	z-index: -1;
	top: 0;
	right: 0;
	width: 100%;
	object-fit: cover;
	height: calc(100vh - 370px);
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	${mediaMax.laptop`
    height: 480px;
  `}

	${mediaMax.tablet`
    height: 350px;
  `}
`;

export const WrapperBannerImage = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	img {
		width: 120%;
		height: 120%;
		object-fit: cover;
		position: absolute;
		top: -10%;
		left: -10%;
	}

	${mediaMax.tablet`
    height: 350px;
  `}
`;

export const Box = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: auto;
	padding: 0;
	transform: translateY(-50%);

	${mediaMax.tablet`
		position: static;
		transform: translateY(0%);
  `}
`;

export const Content = styled.div`
	width: 43%;
	background: rgba(10, 37, 64, 0.6);
	backdrop-filter: blur(10px);
	padding: 40px;
	border-radius: 20px;
	border: 1px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

	${mediaMax.laptop`
		padding: 20px;
	`}

	${mediaMax.tablet`
		width: 100%;
		margin-top: 20px;
		border: none;
		background: none;
		box-shadow: none;
		backdrop-filter: none;
	`}

	${mediaMax.phone`
		margin-top: 10px;
		padding: 20px 0;
	`}
`;

export const Title = styled(motion.h1)`
	font-weight: 700;
	font-size: 50px;
	margin-bottom: 20px;
	padding-bottom: 20px;
	line-height: 1;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.4) 50%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	${mediaMax.laptopLarge`
		font-size: 30px;
  `}

	${mediaMax.laptop`
		font-size: 28px;
  `}

	${mediaMax.tablet`
		text-align: center;
  `}
`;

export const Description = styled(motion.p)`
	font-size: 30px;
	font-weight: 400;
	color: var(--secondary-color);
	line-height: 1.5;
	margin-bottom: 40px;

	${mediaMax.laptopLarge`
		font-size: 24px;
  `}

	${mediaMax.laptop`
		margin-bottom: 20px;
		font-size: 20px;
  `}

	${mediaMax.tablet`
		text-align: center;
  `}
`;

export const WrapperButtons = styled(motion.div)`
	display: flex;
	gap: 10px;

	${mediaMax.laptopLarge`
		button {
			font-size: 14px;
			height: 54px;
		}
	`}

	${mediaMax.laptop`
		flex-direction: column;
	`}

	${mediaMax.tablet`
		align-items: center;
		
		button {
			width: 100%;
		}
	`}
`;

export const WrapperPhone = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	p {
		opacity: 0.8;
		font-size: 12px;
		color: var(--primary-color);
	}

	${mediaMax.laptop`
		justify-content: center;
	`}
`;

export const Phone = styled.div`
	font-size: 20px;
	font-weight: 700;
	color: var(--primary-color);

	${mediaMax.laptopLarge`
		font-size: 14px;
	`}
`;

export const PhoneCall = styled.img`
	width: 24px;
`;
