const express = require('express');
const fs = require('fs');
const app = express.Router();

app.get('/:number', function(req, res){
    const qa = fs.readFileSync('./question_files/questions' + req.params.number + '.json', 'utf-8');

    const json = JSON.parse(qa);
    res.send(json);
});

module.exports = app;