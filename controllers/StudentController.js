const User = require('../models/Student')

const getAll = async (req, res) => {
    try {
        const find = await User.find();
        res.send(find)
    } catch (error) {
        res.send(error);
    }
}
const findById = async (req, res) => {
    try {
        const userId = req.params.id;
        const find = await User.findById(userId)
        res.send(find)
    } catch (error) {
        res.send(error);
    }
}
const updateById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndUpdate(userId, req.body);
        const find = await User.findById(userId)
        res.send(find);
    } catch (error) {
        res.send(error);
    }
}
const deleteById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndDelete(userId);
        res.send("Data Deleted SuccessFully")
    } catch (error) {
        res.send(error);
    }
}


module.exports = { getAll, findById, updateById, deleteById }