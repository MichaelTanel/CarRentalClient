var app = require('./app');

var connection = require('./database');
var bodyParser = require('body-parser');

// Used to parse the body of HTTP requests.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Verifies that the email and password exist in the database.
app.post('/login', (req, res) => {
    var registerQuery = `SELECT FirstName, LastName, PhoneNumber, LicenseNumber, AnnualFee`;
    registerQuery += ` FROM User WHERE Email = "${req.body.email}" AND Password = "${req.body.password}"`;

    connection.query(registerQuery, (err, result) => {
        if (err) {
            console.log(err.message);
            res.json({error: err.message});
        } else {
            // Set the email in the result being returned.
            // Using result[0] since there will only be 1 element in the array.
            // Return auth token.
            results[0].email = req.body.email
            res.json(result);
        }
    });
});

app.post('/register', (req, res) => {

    var registerQuery = 'INSERT INTO User SET ?';

    // req.body inserts each of the key-value pairs in the body into the query.
    connection.query(registerQuery, req.body, (err, results) => {
        if (err) {
            // If the error is a duplicate key entry
            if (err.errno == 1062) {
                // res.render(err)
                res.json({error: "Account already exists for this email."});
                console.log("Duplicate user");
            } else {
                res.json({error: err.message});
            }
        } else {
            // TODO: return auth token
            res.json({success: "Successfully registered"});
            console.log("Successfully registered");
        }
    });
});

app.get('/users', (req, res, next) => {
    var sql = 'SELECT * FROM User';
    connection.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json(results);
    });
});