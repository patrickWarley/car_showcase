import { CarProps } from '@/types'
import Image from 'next/image';

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
			<div className="car-card_icon-container"></div>
			<div className="car-card_icon"></div>
			<div className="car-card_icon-text"></div>
			<div className="car-card_btn-container"></div>
		</div >
	)
}

export default CarCard