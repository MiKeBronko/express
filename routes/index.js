const router = require('express').Router();
const users = require('../routes/users.js'); // импортируем роутер
const cards = require('../routes/cards.js'); // импортируем роутер

router.use('/', users);
router.use('/', cards);

module.exports = router;
