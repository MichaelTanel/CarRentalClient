var app = require('./app');

var connection = require('./database');

// Get reservations for all vehicles
app.get('/reservations', (req, res) => {
    var maintenanceHistory = 'SELECT * FROM Reservation';

    connection.query(maintenanceHistory, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});

// Insert reservation for a specific member
app.put('/reservations/:memberNumber', (req, res) => {
    let tmpBody = req.body;
    tmpBody.memberNumber = req.params.memberNumber;

    // TODO: generate date and time
    var reservation = 'INSERT INTO Reservation SET ?';

    connection.query(reservation, tmpBody, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            res.json(result);
        }
    });
});