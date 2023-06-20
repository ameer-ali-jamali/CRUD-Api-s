const mongoose = require('mongoose');
require('dotenv').config();


const uri = process.env.ATLAS_URI;
async function connect() {
    try {
        const client = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to the Atlas database.')
        // client.close()
        // console.log('Connection closed.')
    } catch (err) {
        console.error('Error connecting to the Atlas database:')
    }
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