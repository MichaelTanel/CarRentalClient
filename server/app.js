var express = require("express");
var app = module.exports = express();

var connection = require('./database');

// Used to parse the body of HTTP requests.
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get("/url", (req, res, next) => {
	connection.query('SHOW DATABASES', (err, result) => {
		if (err) {
			throw err;
		}

		console.log(result);
		res.send(result);
	});
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
})

require('./account');
require('./vehicle');
require('./vehicleMaintenance');