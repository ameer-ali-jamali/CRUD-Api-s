const { mongoose, router, app } = require('../config')


const tableSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String
});
const User = mongoose.model("User", tableSchema);

module.exports = User;