const { router, app } = require('../config')

const { findById } = require('../controllers/student');


app.use('/student', router)

router.get('/:id', findById);


module.exports = router;