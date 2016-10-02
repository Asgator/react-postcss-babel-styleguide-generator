var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

console.log('look localhost:3000');

app.listen(process.env.PORT || 3000);
