//Instagram

const url = 'https://instagram120.p.rapidapi.com/api/instagram/highlights';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'BUSCARLA en la pagina de RapidAPI',
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