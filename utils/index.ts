const headers = {
	'X-RapidAPI-Key': '58de61bc94msh679a2787e7bbfbap13e8c6jsn9692c07bc56e',
	'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
};

const url = (param?: string) => `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${param}`

export async function fetchCars() {
	try {
		const request = await fetch(url('corolla'), {
			method: 'GET',
			headers: headers
		});
		const result = await request.json();

		return result;

	} catch (error) {
		console.log(error);
	}
}