const express = require('express');
const router = express.Router();
const app = express()
const port = 3000;

const { getAll, findById, updateById, deleteById } = require('../controllers/controller');

router.use(express.json());

app.use('/', router)

router.get('/users', getAll);
router.get('/user/:id', findById);
router.put('/user/:id', updateById);
router.delete('/user/:id', deleteById);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
module.exports = router;
