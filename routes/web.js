const express = require('express');
const router = express.Router();

const { randomUser, getAll, findById, updateById, deleteById } = require("../controllers/controller");

router.use(express.json());

router.get('/user/random', randomUser);
router.get('/user', getAll);
router.get('/user/:id', findById);
router.put('/user/:id', updateById);
router.delete('/user/:id', deleteById);

module.exports = router;
