import { Button } from "components/ui/Button";
import {
	BgImageRight,
	Box,
	Container,
	ContainerImage,
	Content,
	Description,
	HeaderBanner,
	Line,
	Phone,
	PhoneCall,
	PlumberImage,
	Title,
	WrapperBannerImage,
	WrapperButtons,
	WrapperImage,
	WrapperPhone,
} from "./styles";

import phone from "assets/images/Banner/phone-call-white.png";
import backgroundImage from "assets/images/Banner/background.png";
import plumberImage from "assets/images/Banner/plumber.png";

import { useParallax } from "hooks/useParallax";
import { PHONE_NUMBER } from "constants/index";

export const Banner = () => {
	const parallaxStyle = useParallax(20);

	return (
		<>
			<Line />

			<HeaderBanner>
				<WrapperImage>
					<BgImageRight>
						<ContainerImage>
							<WrapperBannerImage>
								<img src={backgroundImage} alt="background" style={parallaxStyle} />
							</WrapperBannerImage>
						</ContainerImage>
					</BgImageRight>
				</WrapperImage>

				<Box>
					<Container>
						<Content>
							<Title
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}>
								Reliable Plumbing Services
							</Title>
							<Description
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
								Your Trusted Local Plumber
							</Description>

							<WrapperButtons
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
								<Button variant="blue" size="M">
									REQUEST SERVICE
								</Button>

								<Button variant="dark" size="M">
									<a href={`tel:${PHONE_NUMBER.value}`}>
										<WrapperPhone>
											<PhoneCall src={phone} alt="phone" />

											<div>
												<p>CALL NOW</p>
												<Phone>{PHONE_NUMBER.label}</Phone>
											</div>
										</WrapperPhone>
									</a>
								</Button>
							</WrapperButtons>
						</Content>

						<PlumberImage src={plumberImage} alt="Plumber" />
					</Container>
				</Box>
			</HeaderBanner>
		</>
	);
};
