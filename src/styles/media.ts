import { css } from "styled-components";

export const breakpoints = {
	desktopLarge: 1920,
	specialDesktop: 1441,
	desktop: 1440,
	laptopLarge: 1366,
	specialLaptop: 1025,
	laptop: 1024,
	specialTablet: 769,
	tablet: 768,
	phone: 480,
	smallPhone: 375,
} as const;

type BreakpointKey = keyof typeof breakpoints;
type MediaFn = (...args: Parameters<typeof css>) => ReturnType<typeof css>;

const createMedia = (type: "min" | "max") =>
	(Object.keys(breakpoints) as BreakpointKey[]).reduce(
		(acc, key) => {
			acc[key] = (...args) => css`
				@media (${type}-width: ${breakpoints[key] / 16}em) {
					${css(...args)}
				}
			`;
			return acc;
		},
		{} as Record<BreakpointKey, MediaFn>,
	);

export const mediaMin = createMedia("min");
export const mediaMax = createMedia("max");
