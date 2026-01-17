import styled from "styled-components";
import { mediaMax } from "styles/media";

export const Container = styled.div`
	width: 100%;
	background: linear-gradient(180deg, #050c18 0%, #132b46 15%, #132b46 85%, #050c18 100%);
	position: relative;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

	&::before,
	&::after {
		content: "";
		position: absolute;
		left: 0;
		width: 100%;
		height: 4px;
		background: linear-gradient(
			90deg,
			rgba(73, 109, 145, 0.4) 0%,
			rgba(182, 206, 230, 0.8) 50%,
			rgba(73, 109, 145, 0.4) 100%
		);
		z-index: 2;
	}
	&::before {
		top: 0;
	}
	&::after {
		bottom: 0;
	}
`;

export const Lists = styled.ul`
	display: flex;
	justify-content: space-between;
	gap: 10px;
	max-width: 1080px;
	margin: 0 auto;
	padding: 20px 20px 30px;

	${mediaMax.tablet`
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px 10px;
		padding: 30px 20px 30px;
	`}
`;

export const Item = styled.li`
	display: flex;
	width: 20%;
	flex-direction: column;
	position: relative;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background 0.3s ease;

	h2 {
		font-size: 20px;
		font-weight: 600;
		color: var(--primary-color);
		transition:
			color 0.3s ease,
			text-shadow 0.3s ease;
	}

	&:not(:last-child)::after {
		content: "";
		position: absolute;
		right: -33px;
		top: 14%;
		height: 80%;
		width: 1px;
		background: linear-gradient(to bottom, transparent, #4a6d91, transparent);
	}

	&:hover {
		h2 {
			color: #66b2ff;
			text-shadow: 0 0 10px rgba(102, 178, 255, 0.5);
		}

		img {
			transform: scale(1.1) translateY(-5px);
			filter: drop-shadow(0 0 8px rgba(74, 144, 226, 0.6));
		}
	}

	${mediaMax.laptop`
			h2 {
				font-size: 16px;
			}
		`}

	${mediaMax.tablet`
			width: 100%;

			&:not(:last-child)::after {
				right: -6px;
			}

			&:nth-child(2)::after {
				display: none;
			}
		`}

		${mediaMax.phone`
			h2 {
				font-size: 14px;
			}
		`}
`;

export const Image = styled.img`
	width: 64%;
	margin-bottom: 6px;
	transition:
		transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
		filter 0.3s ease;

	${mediaMax.laptop`
		width: 52%;
	`}

	${mediaMax.tablet`
		width: 30%;
	`}

	${mediaMax.phone`
		width: 40%;
	`}
`;
