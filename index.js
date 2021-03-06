var connect = require('connect');
var app = connect();
var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};

var goodbyeWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};
app.use(logger);
app.use('/hello', function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

app.use('/goodbye', goodbyeWorld);
app.listen(3000);
console.log('Server running at http://localhost:3000/');