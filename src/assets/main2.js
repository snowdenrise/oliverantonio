//Instagram

const url = 'https://instagram120.p.rapidapi.com/api/instagram/highlights';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '8415f06a8amsh3315f101fec9136p18826ajsnf257e16f8655',
		'X-RapidAPI-Host': 'instagram120.p.rapidapi.com'
	},
	body: {
		username: 'reposteria_oliver'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}