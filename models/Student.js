const { mongoose } = require('../config')

const tableSchema = new mongoose.Schema({
    name: String,
    roll_number: String,
    position: String,
    gender: String
});
const Student = mongoose.model("Student", tableSchema);

module.exports = Student;