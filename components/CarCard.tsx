import { CarProps } from '@/types'
import Image from 'next/image';
import CustomButton from './CustomButton';

interface CarCardProps {
	car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
	const { city_mpg, year, make, model, transmission, drive } = car;

	return (
		<div className='car-card group'>
			<div className="car-card_content">
				<h2 className="car-card_content-title">{make} {model}</h2>
			</div>

			<p className="car-card_price">
				<span className="car-card_price-dollar">$</span>
				<div>52</div>
				<span className="car-card_price-day">/day</span>
			</p>

			<div className="car-card_image">
				<Image src="/hero.png" fill priority alt="car image" />
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
							{city_mpg}
						</div>
					</div>
				</div>
				<div className="car-card_btn-container">
					<CustomButton title='View more' containerStyles="w-full py-[16px] rounded-full bg-primary-blue px-4" />
				</div>
			</div>
		</div >
	)
}

export default CarCard