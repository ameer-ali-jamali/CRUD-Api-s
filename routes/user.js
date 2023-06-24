const { router, app } = require('../config')

const { findById } = require('../controllers/user');

app.use('/user', router)

router.get('/:id', findById);


module.exports = router;