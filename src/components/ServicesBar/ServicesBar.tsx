import { motion, Variants } from "framer-motion";
import { Container, Image, Item, Lists } from "./styles";

import DrainCleaning from "assets/images/ServicesBar/DrainCleaning.png";
import EmergencyRepairs from "assets/images/ServicesBar/EmergencyRepairs.png";
import Inspecting from "assets/images/ServicesBar/Inspecting.png";
import WaterHeaters from "assets/images/ServicesBar/WaterHeaters.png";

const MotionLists = motion.create(Lists);
const MotionItem = motion.create(Item);

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 10,
		},
	},
};

export const ServicesBar = () => {
	return (
		<Container>
			<MotionLists
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}>
				<MotionItem variants={itemVariants}>
					<Image src={EmergencyRepairs} alt="Emergency Repairs" />
					<h2>Emergency Repairs</h2>
				</MotionItem>
				<MotionItem variants={itemVariants}>
					<Image src={DrainCleaning} alt="DrainCleaning" />
					<h2>Drain Cleaning</h2>
				</MotionItem>
				<MotionItem variants={itemVariants}>
					<Image src={WaterHeaters} alt="Water Heaters" />
					<h2>Water Heaters</h2>
				</MotionItem>
				<MotionItem variants={itemVariants}>
					<Image src={Inspecting} alt="Inspecting" />
					<h2>Inspecting</h2>
				</MotionItem>
			</MotionLists>
		</Container>
	);
};
