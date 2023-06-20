const User = require('./models/User');
// const routers = require('./routes/web')


const getAll = async (req, res) => {
    try {
        const find = await User.find();
        // res.send(find)
        console.log(find)
    } catch (error) {
        // res.send(error);
        throw error;
    }
}
getAll()