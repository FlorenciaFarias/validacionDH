const { Router } = require('express');
const router = Router();
const { register, login } = require ('../controllers/users.controller');

router.get('/register', register);

router.get('/login', login);

module.exports = router;