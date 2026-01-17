import { useEffect, useState } from "react";

export const useParallax = (sensitivity: number = 20) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Calculate mouse position relative to viewport center
			// Values range from -1 to 1
			const x = (e.clientX / window.innerWidth - 0.5) * 2;
			const y = (e.clientY / window.innerHeight - 0.5) * 2;
			setMousePosition({ x, y });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return {
		transform: `translate(${mousePosition.x * sensitivity}px, ${mousePosition.y * sensitivity}px)`,
		transition: "transform 0.1s ease-out",
	};
};
