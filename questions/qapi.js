var express = require('express');
var fs = require('fs');
var app = express.Router();

app.get('/:number', function(req, res){
    var qa = fs.readFileSync('./question_files/questions' + req.params.number + '.json', 'utf-8');

    var json = JSON.parse(qa);
    res.send(json);
});

module.exports = app;