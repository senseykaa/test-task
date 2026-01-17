import { Banner } from "components/Banner";
import { Header } from "components/layout/Header";
import { ServicesBar } from "components/ServicesBar";
import { Container } from "./styles";

export const HeroSection = () => {
	return (
		<Container>
			<Header />
			<Banner />
			<ServicesBar />
		</Container>
	);
};
