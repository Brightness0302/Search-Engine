const fetch = require('node-fetch');

getArticles = async(domains, sortBy, keyword, limit, offset) => {
	let baseQuery = "https://newsapi.org/v2/everything?apiKey=ab3d139e6a854b1eb1c3977d9248996d";
	if (domains != null) baseQuery += "&domains=" + domains;
	if (sortBy != null) baseQuery += "&sortBy=" + sortBy;
	if (keyword != null) baseQuery += "&q=+" + keyword;
	if (limit != null) baseQuery += "&pageSize=" + limit;
	if (offset != null) baseQuery += "&page=" + offset;
	console.log(baseQuery);
	return fetch(baseQuery)
		.then(res => res.json())
		.then(res => console.log(res));
}
