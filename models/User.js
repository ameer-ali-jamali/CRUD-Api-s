const mongoose = require('mongoose');
require('dotenv').config();


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

const tableSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String
});
const User = mongoose.model("User", tableSchema);

module.exports = User;