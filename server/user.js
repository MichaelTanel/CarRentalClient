var app = require('./app');

app.get('/user', (req, res, next) => {
    res.json(['Tim, Mike']);
});