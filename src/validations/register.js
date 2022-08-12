const {body} = require('express-validator');

const {all} = require('../model/users.model');

const register = [
    body('nombre').notEmpty().withMessage('El nombre no puede quedar vacío.').bail().isLength({min :2}).withMessage('El nombre debe contener minimamente 2 caracteres.'),
    body('apellido').notEmpty().withMessage('El apellido no puede quedar vacío.').bail().isLength({min :2 }).withMessage('El apellido debe contener minimamente 2 caracteres.'),
    body('email').notEmpty().withMessage('El email debe completarse').bail().isEmail().withMessage('El email debe contener un fomrato válido').custom(value => {
        let users = all();
        users = users.map(u => u.email);
        if(users.includes(value)){
            throw new Error('El email ya está registrado')
        }
        return true
    }),
    body('password').notEmpty().withMessage('Debes completar la contraseña').bail().isLength({min: 4})


]

module.exports= register;