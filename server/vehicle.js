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

// Available vehicles throughout the specified date range.
app.get('/vehicles/available', (req, res) => {
    var reservationStart = req.query.reservationStart;
    var reservationEnd = req.query.reservationEnd;
    var getAvailableVehicles = `SELECT * FROM Vehicle WHERE vin NOT IN (SELECT vin FROM`;
    getAvailableVehicles += ` Reservation WHERE reservationStart <= ${reservationStart} AND reservationEnd >= ${reservationStart}`;
    getAvailableVehicles += ` OR reservationStart <= ${reservationEnd} AND reservationEnd >= ${reservationEnd})`;

    connection.query(getAvailableVehicles, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});