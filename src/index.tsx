import React from "react";
import ReactDOM from "react-dom/client";
import { HeroSection } from "./pages/Home/components/HeroSection";
import "./styles/globalStyles.css";
import "./styles/normalize.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<HeroSection />
	</React.StrictMode>,
);
