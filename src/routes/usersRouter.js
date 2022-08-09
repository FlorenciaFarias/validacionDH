const { Router } = require('express');
const router = Router();

const {register, registerProcess, login} = require('../controllers/usersController');

const registerValidation = require('../validations/register');
const loginValidation = require('../validations/login');

router.get('/register', register);
router.post('/register', [registerValidation], registerProcess);

router.get('/login');
router.post('/access', [loginValidation], access);

router.get('/logout', [isLogged], logout);

module.exports = router;