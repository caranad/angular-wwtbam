var express = require('express');
var questions = require('./questions/qapi');
var app = express();

var PATH = __dirname + '/dist/wwtbam';

app.use(express.static(PATH));
app.use('/questions', questions);

app.get('*', function(req, res) {
    res.sendFile(PATH + '/index.html');
});

app.listen(8000, function() {
    console.log("Starting WHO WANTS TO BE A MILLIONAIRE: ANIME AND MANGA * EDITION");
});