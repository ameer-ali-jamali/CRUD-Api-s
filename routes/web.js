const express = require('express');
const router = express.Router();
const app = express()
const port = 3000;

const { getAll, findById, updateById, deleteById } = require('../controllers/controller');

router.use(express.json());

app.use('/user', router)

router.get('/', getAll);
router.get('/:id', findById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);



app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
module.exports = router;
