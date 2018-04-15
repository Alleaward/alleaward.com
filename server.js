var express = require('express');
var path = require('path');
app = express();

var history = require('connect-history-api-fallback');

app.use(history(__dirname + "/dist/index.html")); // express app "uses" the middleware (history) which takes the argument '__dirname + "/dist"' which i think makes an absolute path.

var port = process.env.PORT || 5000;
app.listen(port);

console.log('Server started ' + port);

