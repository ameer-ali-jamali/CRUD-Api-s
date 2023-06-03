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
    first_name: String,
    last_name: String,
    email: String,
    gender: String
})

const User = new mongoose.model("User", tableSchema)

const insertData = async () => {
    try {
        const putData = new User({
            first_name: "Amjad",
            last_name: "Ali",
            email: "amjad@gmail.com",
            gender: "male"
        })
        const result = await putData.save();
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
insertData();
app.get('/insert', (req, res) => {
    res.send("data inserted");
});
app.listen(3000, () => console.log('Example app is listening on port 4000.'));
