const { router, app } = require('../config')

const { getAll, findById, updateById, deleteById } = require('../controllers/user');


app.use('/admin', router)

router.get('/users/', getAll);
router.get('/user/:id', findById);
router.put('/user/:id', updateById);
router.delete('/user/:id', deleteById);

module.exports = router;