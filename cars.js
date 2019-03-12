var app = require('./app');

app.get('/users', (req, res, next) => {
    res.json(['Tim, Mike']);
});