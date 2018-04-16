var express = require('express');
var path = require('path');

var app = express();

var pug = require('pug');
// app.set('view engine', 'pug')

// var history = require('connect-history-api-fallback');
// app.use(history({ 
//     // index: __dirname + "/dist/build.js", //Cannot GET /
//     index: __dirname + "/dist", //Cannot GET /
//     // index: __dirname + "/index.html", //Cannot GET /
//     htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
//     verbose: true
// })); 

// var history = require('connect-history-api-fallback');
// app.use(history({
//     verbose: true
// }));

app.get("/", (req, res) => {
    console.log(path.resolve(__dirname, 'index.html'));
    // app.use(express.static(path.resolve(__dirname, 'index.html')));
    // res.sendFile(path.resolve(__dirname, 'index.html'));
    // res.sendFile(__dirname + '/index.html');
    app.use('/dist', express.static('dist'));

});

// app.get("/", (req,res) => {
    // res.sendFile(__dirname + "/dist/build.js"); //Just shows literal contents of file
    // res.render(__dirname + "/dist/build.js"); //Error: Cannot find module 'html'
    // res.render(__dirname + "/dist/"); //Error: No default engine was specified and no extension was provided.

    // // app.engine('html', require('ejs').renderFile);
    // res.render(__dirname + "/dist"); //Error: No default engine was specified and no extension was provided.

    // res.sendFile(__dirname + "/index.html"); //Error: Cannot find module 'html'
    // res.render(__dirname + "/index.html"); //Error: Cannot find module 'html'
    // res.sendFile(path.resolve(__dirname, "dist/")); //Cannot GET /
    // res.render(__dirname + "dist"); //Error: Cannot find module 'comdist'
// });


var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server started ' + port);

