const express = require('express');
const cors = require('cors');
const questions = require('./questions/qapi');
const app = express();

const options = {
    origin:['http://localhost:4200'],
    methods:['GET','POST', 'PUT', 'DELETE'],
    credentials: true
};

app.use(cors(options));

app.use('/questions', questions);

app.listen(8000, function() {
    console.log("Starting WHO WANTS TO BE A MILLIONAIRE: ANIME AND MANGA * EDITION");
});