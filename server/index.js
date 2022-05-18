const express = require('express');
const mysql = require('mysql');
var cors = require('cors')
var axios = require('axios');

const bodyParser = require('body-parser'); // Middleware 

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
const apiKey = "205babaf0f0c4a2ab812c5ec9b961270";

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "LoginApp"
})

db.connect(function (err) {
    if (err) throw err;
    console.log("connected!");
		var sql = "CREATE TABLE IF NOT EXISTS user (userid int auto_increment primary key, username varchar(50),password varchar(50), general boolean, business boolean, entertainment boolean, health boolean, science boolean, sports boolean, technology boolean)";
			db.query(sql, function (err, result) {
					if (err) throw err;
					console.log("user created");
			});
		let sql_art = "CREATE TABLE IF NOT EXISTS article (articleid int auto_increment primary key, articletitle varchar(100), articlebody varchar(200), date Date )";
		db.query(sql_art, (err, result) => {
			if (err) throw err;
			console.log("article created");
		})
});

app.get("/search/:search_item", async(req, res) => {
	let search=req.params.search_item;

	let statusCode = 200;
	let news_get;

	var url = `http://newsapi.org/v2/everything?q=${search}&searchIn=title&sortBy=publishedAt&apiKey=${apiKey}`;
	console.log(url);
	news_get = await axios.get(url);

	console.log(news_get.data.articles.length);
	if (news_get.data.articles.length==0) {
		res.status(401).send({
			message: "Not found"
		})
		res.end();
		return;
	}

	res.status(statusCode).send({
		articles: news_get.data.articles
	})
	res.end()
})

// =======Sign in API
app.post("/signin", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	db.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function (error, result, fields) {
		if (error) throw error;

		if (result.length > 0) {
			res.status(200).send(result);
			console.log('Correct Username and/or Password!');
		} else {
			res.status(401).send(result);
			console.log('Incorrect Username and/or Password!');
		}
		res.end();
	});
})

app.post("/getsetting", (req, res) => {
	let username = req.body.username;
	db.query('SELECT * FROM user WHERE username = ?', [username], function (err, result) {
		let normalResults = result.map((mysqlObj) => {
			return Object.assign({}, mysqlObj);
		});
		let arr = {};
		arr[0] = normalResults[0].general;
		arr[1] = normalResults[0].business;
		arr[2] = normalResults[0].entertainment;
		arr[3] = normalResults[0].health;
		arr[4] = normalResults[0].science;
		arr[5] = normalResults[0].sports;
		arr[6] = normalResults[0].technology;
		res.status(200).send(arr);
	});
})

app.post("/setting", (req, res) => {
	let data = req.body.check;
	let username = req.body.username;
	console.log(data)
	let text = JSON.stringify(data)
	text = text.substring(1, text.length - 1);
	const arr = text.split(",");
	console.log(username)

	db.query('UPDATE user SET general = ? WHERE username = ?', [arr[0], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET business = ? WHERE username = ?', [arr[1], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET entertainment = ? WHERE username = ?', [arr[2], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET health = ? WHERE username = ?', [arr[3], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET science = ? WHERE username = ?', [arr[4], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET sports = ? WHERE username = ?', [arr[5], username], function (err, result) {
		if (err) throw err;
	})

	db.query('UPDATE user SET technology = ? WHERE username = ?', [arr[6], username], function (err, result) {
		if (err) throw err;
	})
})

app.post("/signup", (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	db.query('SELECT * FROM user WHERE username = ? ', [username], function (error, results, fields) {
		if (error) throw error;

		if (results.length > 0) {
			res.writeHead(400);
			res.write('Duplicate username!');
		}
		else {
			db.query('INSERT INTO user(username, password, general, business, entertainment, health, science, sports, technology) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
			, [username, password, 1, 0, 0, 0, 0, 0, 0])
			res.writeHead(200);
			res.write('Successfully registered');
		}
		res.end();
	});
})

app.get("/news/:user", (request, response) => {
	const username = request.params.user;
	let statusCode = 200;
	let msg = ''


	db.query('SELECT * FROM user WHERE username = ?', [username], function (error, results, fields) {
		if (error) throw error;
		//no user found
		if (results.length == 0) {
			statusCode = 401;
			msg = "User is not recognized, general articles are returned"
			axios.get(`http://newsapi.org/v2/top-headlines?country=us&pageSize=100&sortBy=publishedAt&category=general&apiKey=${apiKey}`)
			.then(res => {
				//response general news
				response.status(statusCode).send({
					message: msg,
					articles: res.data.articles
				})
			})
		}
		//user found
		else {
			statusCode = 200;
			msg = "Articles according to user preferences have been returned"
			//get user setting from database
			axios.post('http://localhost:8080/getsetting', {username: request.params.user})
			.then(res => {
				//callback function
				storeResults(res.data)
			})

			//callback function to load the setting and store in the result array
			function storeResults(data){
				console.log(data)
				let result = [];
				let map = ["general", "business", "entertainment", "health", "science", "sports", "technology"];
				for(let i = 0; i < 7; i++){
					if(data[i] > 0){
						result.push(map[i])
					}
				}
				//result should be the checked setting in array eg. [[ 'general', 'entertainment', 'health', 'science' ]]
				getShuffledNews(result)
			}

			async function getShuffledNews(settingList){
				try {
					let endpoints = []
					let combinedArticles = []

					//call APIs multiple times to get articles in multiple categories
					//store the articles and shuffle and then send the response back
					for(let i in settingList){
						endpoints.push(`http://newsapi.org/v2/top-headlines?country=us&?sortBy=publishedAt&category=${settingList[i]}&pageSize=100&apiKey=${apiKey}`)
					}
					axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
					.then((responseList) => {
							for(let i in responseList){
								for(let j in responseList[i].data.articles){
									combinedArticles.push(responseList[i].data.articles[j])
								}
							}

							//shuffle the news in prefered categories
							combinedArticles.sort(() => (Math.random() > .5) ? 1 : -1);
							
							//send the response
							response.status(statusCode).send({
								message: msg,
								articles: combinedArticles
							})
						}
					)
				  } catch {
					throw Error("Promise failed");
				  }
			}

		}
	});
})

app.get("/category/:category", async(req, res) => {
	let category = req.params.category;
	let statusCode = 200;
	let news_get;

	var url = `http://newsapi.org/v2/top-headlines?country=us&pageSize=100&sortBy=publishedAt&category=${category}&apiKey=${apiKey}`;
	console.log(url);
	news_get = await axios.get(url);

	res.status(statusCode).send({
		articles: news_get.data.articles
	})
})

app.post("/signout", (req, res) => {
	res.redirect('/');
	res.end();
})

app.listen(8080, () => {
    console.log("Server is running!")
});