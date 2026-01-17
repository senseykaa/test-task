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
	WrpapperInfoMobile,
} from "./styles";

const links = [
	{ label: "Home", href: "#" },
	{ label: "About Us", href: "#" },
	{ label: "Services", href: "#" },
	{ label: "Pricing", href: "#" },
];

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
						{links.map((link) => (
							<ListItem
								key={link.label}
								$isActive={activeLink === link.label}
								onClick={() => setActiveLink(link.label)}>
								{link.label}
							</ListItem>
						))}
					</Lists>

					<a href="tel:+1234567890">
						<WrapperPhone>
							<PhoneCall src={phone} alt="phone" />
							<InnerPhone>
								<p>24/7 Emergency Call</p>
								<Phone>123-456-7890</Phone>
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
					{links.map((link) => (
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

				<WrpapperInfoMobile>
					<a href="tel:+1234567890">
						<WrapperPhone>
							<PhoneCall src={phone} alt="phone" />
							<InnerPhone style={{ display: "block" }}>
								<p>24/7 Emergency Call</p>
								<Phone>123-456-7890</Phone>
							</InnerPhone>
						</WrapperPhone>
					</a>

					<Button variant="orange" size="M">
						GET A QUOTE
					</Button>
				</WrpapperInfoMobile>
			</MobileMenu>
		</Container>
	);
};
