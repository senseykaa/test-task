import logo from "assets/images/Header/logo.png";
import phone from "assets/images/Header/phone-call-blue.png";
import { Button } from "components/ui/Button";
import { useState } from "react";
import {
	Burger,
	Container,
	Inner,
	InnerPhone,
	ListItem,
	Lists,
	Logo,
	MobileMenu,
	Phone,
	PhoneCall,
	WrapperInfo,
	WrapperLogo,
	WrapperPhone,
	WrapperInfoMobile,
} from "./styles";
import { LINKS } from "./constants";
import { PHONE_NUMBER } from "constants/index";

export const Header = () => {
	const [activeLink, setActiveLink] = useState("Home");
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<Container>
			<Inner>
				<WrapperLogo>
					<Logo src={logo} alt="logo" />

					<h1>
						PLUMBING <span>SERVICES</span>
					</h1>
				</WrapperLogo>

				<WrapperInfo>
					<Lists>
						{LINKS.map((link) => (
							<ListItem
								key={link.label}
								$isActive={activeLink === link.label}
								onClick={() => setActiveLink(link.label)}>
								{link.label}
							</ListItem>
						))}
					</Lists>

					<a href={`tel:${PHONE_NUMBER.value}`}>
						<WrapperPhone>
							<PhoneCall src={phone} alt="phone" />
							<InnerPhone>
								<p>24/7 Emergency Call</p>
								<Phone>{PHONE_NUMBER.label}</Phone>
							</InnerPhone>
						</WrapperPhone>
					</a>

					<Button variant="orange" size="M">
						GET A QUOTE
					</Button>
				</WrapperInfo>

				<Burger $isOpen={isMenuOpen} onClick={() => setMenuOpen(!isMenuOpen)}>
					<div />
					<div />
					<div />
				</Burger>
			</Inner>

			<MobileMenu $isOpen={isMenuOpen}>
				<Lists>
					{LINKS.map((link) => (
						<ListItem
							key={link.label}
							$isActive={activeLink === link.label}
							onClick={() => {
								setActiveLink(link.label);
								setMenuOpen(false);
							}}>
							{link.label}
						</ListItem>
					))}
				</Lists>

				<WrapperInfoMobile>
					<a href={`tel:${PHONE_NUMBER.value}`}>
						<WrapperPhone>
							<PhoneCall src={phone} alt="phone" />

							<InnerPhone style={{ display: "block" }}>
								<p>24/7 Emergency Call</p>

								<Phone>{PHONE_NUMBER.label}</Phone>
							</InnerPhone>
						</WrapperPhone>
					</a>

					<Button variant="orange" size="M">
						GET A QUOTE
					</Button>
				</WrapperInfoMobile>
			</MobileMenu>
		</Container>
	);
};
