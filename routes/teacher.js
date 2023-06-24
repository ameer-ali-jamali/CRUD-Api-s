const { router, app } = require('../config')

const { getAll, findById, updateById, deleteById } = require('../controllers/student');


app.use('/teacher', router)

router.get('/students', getAll);
router.get('/student/:id', findById);
router.put('/student/:id', updateById);

module.exports = router;