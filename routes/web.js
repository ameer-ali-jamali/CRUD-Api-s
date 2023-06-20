const express = require('express');
const router = express.Router();




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
const User = new mongoose.model("User", tableSchema)
router.route.use(express.json());

router.route('/user/random').get(randomUser)
router.route('/user').get(getAll)
router.route('/user/:id').get(findById)
router.route.put('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndUpdate(userId, req.body);
        res.send("Your Data Updated");
    } catch (error) {
        res.send(error);
    }
});
router.route.delete('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const result = await User.findByIdAndDelete(userId);
        res.send("Data Deleted")
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;