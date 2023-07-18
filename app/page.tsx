import { Hero, SearchBar, CustomFilter } from '@/components';
import { fetchCars } from '@/utils';
import Image from 'next/image';

export default async function Home() {

	const allCars = await fetchCars();
	console.log(allCars);
	return (
		<main className="overflow-hidden ">
			<Hero />
			<div className="mt-12 padding-x padding-y max-width" id="discover">
				<div className='home_text-container'>
					<h1 className='text-4xl font-extrabold'>Car catalogue</h1>
					<p>Explore out cars you might like</p>
				</div>
				<div className="home_filters">
					<SearchBar />
					<div className="home_filter-container">
						<CustomFilter title="fuel" />
						<CustomFilter title="year" />
					</div>
				</div>

				<div className='home_cars-wrapper'>
					{allCars.map((car) => <div>{car.model}</div>)}
				</div>

			</div>
		</main>
	)
}
