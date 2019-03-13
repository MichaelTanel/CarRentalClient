var app = require('./app');

var connection = require('./database');

// Verifies that the email and password exist in the database.
app.get('/vehicles', (req, res) => {
    var getAllVehicles = 'SELECT * FROM Vehicle';

    connection.query(getAllVehicles, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});