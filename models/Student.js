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
    roll_number: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String
});
const Student = mongoose.model("Student", tableSchema);

module.exports = Student;