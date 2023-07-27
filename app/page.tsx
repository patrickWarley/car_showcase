import { Hero, SearchBar, CustomFilter, CarCard } from '@/components';
import { fetchCars } from '@/utils';
import Image from 'next/image';

export default async function Home() {
	//useEffect = useEffect is a React Hook that lets you synchronize a component with an external system.
	//we don't need to use useEffect everytime
	const allCars = await fetchCars();

	const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
				{
					!isDataEmpty ? (
						<section>
							<div className='home_cars-wrapper'>
								{allCars.map((car) => <CarCard car={car} />)}
							</div>
						</section>
					) : (
						<div className='home_error-container'>
							<h2 className='text-black text-xl font-bold'>Oops, no results.</h2>
							<p>{allCars?.message}</p>
						</div>

					)
				}

			</div>
		</main>
	)
}
