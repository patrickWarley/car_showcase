"use client"
import { CarProps } from '@/types'
import Image from 'next/image';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import { useState } from 'react';
import { generateCarImageUrl } from '@/utils';

interface CarCardProps {
	car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const { city_mpg, year, make, model, transmission, drive } = car;

	return (
		<div className='car-card group'>
			<div className="car-card_content">
				<h2 className="car-card_content-title">{make} {model}</h2>
			</div>

			<div className="car-card_price">
				<span className="car-card_price-dollar">$</span>
				<p>52</p>
				<span className="car-card_price-day">/day</span>
			</div>

			<div className="car-card_image">
				<Image src={generateCarImageUrl(car)} fill priority alt="car image" className='object-contain' />
			</div>

			<div className="relative flex w-full mt-2 justify-center">
				<div className="car-card_icon-container">
					<div className="car-card_icon">
						<Image src="/steering-wheel.svg" alt="steering wheel" width={20} height={20} />
						<div className="car-card_icon-text">
							{transmission === "a" ? 'Automatic' : 'Manual'}
						</div>
					</div>
					<div className="car-card_icon">
						<Image src="/tire.svg" alt="tire" width={20} height={20} />
						<div className="car-card_icon-text">
							{drive.toUpperCase()}
						</div>
					</div>
					<div className="car-card_icon">
						<Image src="/gas.svg" alt="gas" width={20} height={20} />
						<div className="car-card_icon-text">
							{city_mpg} MPG
						</div>
					</div>
				</div>
				<div className="car-card_btn-container">
					<CustomButton
						title='View more'
						containerStyles="w-full py-[16px] rounded-full bg-primary-blue px-4 "
						textStyle="text-white text-[14px] leading-[17px] font-bold"
						rightIcon="/right-arrow.svg"
						handleClick={() => setIsOpen(true)}
					/>

					<CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
				</div>
			</div>
		</div >
	)
}

export default CarCard