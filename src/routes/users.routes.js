const { Router } = require('express');
const router = Router();
const { register, login, process} = require ('../controllers/users.controller');
const middRegister = require('../middlewares/registerMidd');


router.get('/register', register);

router.post('/register',middRegister, process)

router.get('/login', login);

module.exports = router;