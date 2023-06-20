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

app.listen(3000, () => console.log('Example app is listening on port 4000.'))
