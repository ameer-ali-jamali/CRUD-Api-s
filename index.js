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
    gender: String,
})

const User = new mongoose.model("User", tableSchema)

// const insertData = async () => {
//     try {
//         const putData = new User({
//             first_name: "Amjad",
//             last_name: "Ali",
//             email: "amjad@gmail.com",
//             gender: "male"
//         })
//         const result = await putData.save();
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// insertData();
app.use(express.json());

app.get('/user', async (req, res) => {
    try {
        const find = await User.find();
        res.send(find)
    } catch (error) {
        res.send(error);
    }
});
app.get('/user/get', async (req, res) => {
    try {
        const find = await User.find(req.body)
        res.send(find)
    } catch (error) {
        res.send(error);
    }
});
// app.post('/user', async (req, res) => {
//     try {
//         const putData = new User(req.body);
//         const result = await putData.save();
//         res.send(result)
//     } catch (error) {
//         res.send(error);
//     }
// });
// app.put('/user/:id', async (req, res) => {
//     try {
//         const userId = req.params.id;
//         const result = await User.findByIdAndUpdate(userId, req.body)
//         res.send(result)
//     } catch (error) {
//         res.send(error);
//     }
// });
app.delete('/user', async (req, res) => {
    try {
        const result = await User.findByIdAndDelete(req.body);
        res.send(result)
    } catch (error) {
        res.send(error);
    }
});
app.listen(3000, () => console.log('Example app is listening on port 4000.'));
