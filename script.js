const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '01d70831e4msh3d9046ee817745cp1f1391jsn431ce523d069',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));