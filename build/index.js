'use strict';

var express = require('express');
var app = express();
//{}
app.get('/', function (req, res) {
    //res.status(200).send('OK');
    res.send('Hello Worldy..');
});

app.listen(3030, function () {
    return console.log('Listening on Port 3030...');
});