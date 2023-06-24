const Student = require('../models/Student')

const getAll = async (req, res) => {
    try {
        const find = await Student.find();
        res.send(find)
    } catch (error) {
        res.send(error);
    }
}
const findById = async (req, res) => {
    try {
        const userId = req.params.id;
        const find = await Student.findById(userId)
        res.send(find)
    } catch (error) {
        res.send(error);
    }
}
const updateById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await Student.findByIdAndUpdate(userId, req.body);
        const find = await Student.findById(userId)
        res.send(find);
    } catch (error) {
        res.send(error);
    }
}
const deleteById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await Student.findByIdAndDelete(userId);
        res.send("Data Deleted SuccessFully")
    } catch (error) {
        res.send(error);
    }
}


module.exports = { getAll, findById, updateById, deleteById }