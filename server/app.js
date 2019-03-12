var express = require("express");
var app = module.exports = express();

app.get("/url", (req, res, next) => {
	res.json(["Tony", "Lisa", "Michael", "Food"]);
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
})

require('./users');