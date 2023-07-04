"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
const Hero = () => {
	const handleScroll = () => { }

	return (
		<div className="hero">
			<div className="flex-1 pt-36 padding-x">
				<div className="hero_title">
					Find, book, rent a car — quick and super easy!
				</div>
				<p className="hero_subtitle">
					Streamline your car rental experience with our effortless booking process.
				</p>
				<CustomButton
					title="Explore Cars"
					containerStyles="bg-primary-blue text-white rounded-full mt-10"
					handleClick={handleScroll}
				/>
				<div className="hero_image-container">
					<div className="hero_image">
						<Image src="/hero.png" alt="hero" fill className="object-contain" />
						<div className="hero_image-overlay"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero