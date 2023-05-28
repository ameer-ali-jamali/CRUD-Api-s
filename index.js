const express = require('express');
const mongoose = require('mongoose');
const env = require('.env');


const id = process.env.USER_ID;
const pass = process.env.USER_KEY;

const DB = `mongodb+srv://${id}:${pass}@cluster0.e2pewzd.mongodb.net/?retryWrites=true&w=majority`;
const app = express(); ~


    app.get('/', (req, res) => {
        res.send('Successful response.');
    });











app.listen(3000, () => console.log('Example app is listening on port 3000.'));
