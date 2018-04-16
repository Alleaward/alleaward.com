var express = require('express');
var path = require('path');
var app = express();

var pug = require('pug');

app.get("/", (req, res) => {
    console.log(path.resolve(__dirname, 'index.html'));
    app.use('/dist', express.static('dist'));
    res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server started ' + port);

