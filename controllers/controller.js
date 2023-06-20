const User = new mongoose.model("User", tableSchema)
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
const randomUser = async (req, res) => {
    try {
        const randomData = generateRandomData();
        res.send(randomData);
    } catch (error) {
        res.send(error);
    }
}
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
        const find = await User.find(userId)
        res.send(find)
    } catch (error) {
        res.send(error);
    }
}
const updateById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndUpdate(userId, req.body);
        res.send("Your Data Updated");
    } catch (error) {
        res.send(error);
    }
}
const deleteById = async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndDelete(userId);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error);
    }
}


module.exports = { randomUser, getAll, findById, updateById, deleteById }