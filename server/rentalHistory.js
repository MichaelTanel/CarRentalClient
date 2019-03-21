var app = require('./app');

var connection = require('./database');

// Select rental history for a specific vin
app.get('/vehicles/:vin/rentalHistory', (req, res) => {
    let vin = req.params.vin;

    var rentalHistory = `SELECT comment FROM Rental_History WHERE vin = '${vin}'`;

    connection.query(rentalHistory, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});

// Insert rental history for a specific vin
app.put('/vehicles/:vin/rentalHistory', (req, res) => {
    let tmpBody = req.body;
    tmpBody.vin = req.params.vin;

    var rentalHistory = 'INSERT INTO Rental_History SET ?';

    connection.query(rentalHistory, tmpBody, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});