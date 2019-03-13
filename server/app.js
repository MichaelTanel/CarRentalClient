var express = require("express");
var app = module.exports = express();

var connection = require('./database');

app.get("/url", (req, res, next) => {
	connection.query('SHOW DATABASES', (err, result) => {
		if (err) {
			throw err;
		}

		console.log(result);
		res.send(result);
	});
	// res.json(["Tony", "Lisa", "Michael", "Food"]);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
})

require('./user');
require('./account');