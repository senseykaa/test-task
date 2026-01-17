import styled, { css, keyframes } from "styled-components";

const shine = keyframes`
  0% {
    transform: translateX(-150%) skewX(-45deg);
  }
  100% {
    transform: translateX(150%) skewX(-45deg);
  }
`;

const ButtonStyles = css<{ $variant?: string; $size?: string }>`
	border: none;
	border-radius: 3px;
	font-weight: 600;
	cursor: pointer;
	font-family: "Roboto", sans-serif;
	transition: all 0.3s;
	position: relative;
	overflow: hidden;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 0) 0%,
			rgba(255, 255, 255, 0.3) 50%,
			rgba(255, 255, 255, 0) 100%
		);
		transform: translateX(-150%) skewX(-45deg);
		animation: ${shine} 2s infinite;
		pointer-events: none;
	}

	${({ $size }) => {
		switch ($size) {
			case "S":
				return `
					font-size: 12px;
					padding: 8px 16px;
				`;
			case "L":
				return `
					font-size: 20px;
					padding: 16px 32px;
				`;
			case "M":
			default:
				return `
					font-size: 16px;
					padding: 12px 24px;
				`;
		}
	}}

	${({ $variant }) => {
		switch ($variant) {
			case "orange":
				return `
          background: linear-gradient(90deg, var(--color-orange), #ffa500);
          color: var(--primary-color);

          &:hover {
            background: linear-gradient(90deg, #ffa500, #ffb733);
          }
        `;
			case "blue":
				return `
          background: linear-gradient(90deg, #3399ff, #66b2ff);
          color: var(--primary-color);

          &:hover {
            background: linear-gradient(90deg, #66b2ff, #99ccff);
          }
        `;
			case "dark":
				return `
          background: #0c244a;
          color: var(--primary-color);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);

          &:hover {
            background: #1a3763;
          }
        `;
			default:
				return `
          background: #ccc;
          color: #000;

          &:hover {
            background: #bbb;
          }
        `;
		}
	}}
`;

export const StyledButton = styled.button<{ $variant?: string; $size?: string }>`
	${ButtonStyles}
`;
