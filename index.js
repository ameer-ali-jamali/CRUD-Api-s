const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { MongoClient } = require('mongodb');
const uri = process.env.ATLAS_URI;

async function connect() {
    try {
        const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to the Atlas database.');
        client.close();
        console.log('Connection closed.');
    } catch (err) {
        console.error('Error connecting to the Atlas database:', err);
    }
}
connect();

// const DB = ("mongodb://localhost:27017/std");
// mongoose.connect(DB).then((res) => {
//     if (res) {
//         console.log('db connected')
//     }
// }).catch((err) => console.log('DB Not Connected'))
const tableSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
})
const faker = require('faker');
const generateRandomData = () => {
    const data = {
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        gender: faker.random.arrayElement(['Male', 'Female']),
    };
    return data;
};
const User = new mongoose.model("User", tableSchema)
app.use(express.json());
app.get('/user/random', async (req, res) => {
    try {
        const randomData = generateRandomData();
        res.send(randomData);
    } catch (error) {
        res.send(error);
    }
});
app.get('/user', async (req, res) => {
    try {
        const find = await User.find();
        res.send(find)
    } catch (error) {
        res.send(error);
    }
});
app.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const find = await User.find(userId)
        res.send(find)
    } catch (error) {
        res.send(error);
    }
});
app.put('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndUpdate(userId, req.body);
        res.send("Your Data Updated");
    } catch (error) {
        res.send(error);
    }
});
app.delete('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndDelete(userId);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error);
    }
});
app.listen(3000, () => console.log('Example app is listening on port 4000.'))
