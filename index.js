const express = require('express');
const mongoose = require('mongoose');
const app = express();
const DB = ("mongodb://localhost:27017/std");

mongoose.connect(DB).then((res) => {
    if (res) {
        console.log('db connected')
    }
}).catch((err) => console.log('DB Not Connected'))
const tableSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
})




app.get('/', (req, res) => {
    res.send(DB);
});
app.listen(5000, () => console.log('Example app is listening on port 4000.'));
