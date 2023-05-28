const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const id = process.env.USER_ID;
const pass = process.env.USER_KEY;
const DB = `mongodb+srv://${id}:${pass}@cluster0.e2pewzd.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(DB).then((res) => {
    if (res) {
        console.log('db connected')
    }
}).catch((err) => console.log('DB Not Connected'))

app.get('/', (req, res) => {
    res.send('Successful response.');
});
app.listen(3000, () => console.log('Example app is listening on port 3000.'));











