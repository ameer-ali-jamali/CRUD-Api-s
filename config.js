const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const express = require('express');
const router = express.Router();
const app = express()
const port = 3000;


const uri = process.env.ATLAS_URL;
async function connect() {
    const client = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((result) => {
        console.log('Connected to the Atlas database.')
    }).catch((err) => {
        console.error('Error connecting to the Atlas database:')
        // throw err;
    });
}
connect()


router.use(express.json());


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

module.exports = { mongoose, router, app }