import { CarProps } from "@/types";
import { get } from "http";

const headers = {
	'X-RapidAPI-Key': '58de61bc94msh679a2787e7bbfbap13e8c6jsn9692c07bc56e',
	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
};

const url = (param?: string) => `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${param}`

export async function fetchCars() {
	try {
		const request = await fetch(url('q3'), {
			method: 'GET',
			headers: headers
		});
		const result = await request.json();

		return result;

	} catch (error) {
		console.log(error);
	}
}


export const generateCarImageUrl = (car: CarProps, angle?: string) => {
	const url = new URL("https://cdn.imagin.studio/getImage");

	console.log(car);

	const { make, year, model } = car;
	url.searchParams.append('customer', "copyright-imaginstudio");
	url.searchParams.append('make', make);
	url.searchParams.append('modelYear', year.toString());
	url.searchParams.append('modelFamily', model.split(' ')[0]);
	url.searchParams.append('zoomType', 'fullscreen');
	url.searchParams.append('angle', `${angle || ''}`);

	return `${url}`;
}