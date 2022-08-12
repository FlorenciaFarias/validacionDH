const {body} = require('express-validator');

const {all} = require('../model/users.model');

const register = [
    body('nombre').notEmpty().withMessage('El nombre no puede quedar vacío').bail().isLength({min : 2}).withMessage('El nombre debe contener dos caracteres').bail(),
    body('apellido').notEmpty().withMessage('El apellido no puede quedar vacío').bail().isLength({min : 2}).withMessage('El apellido debe contener dos caracteres').bail(),
    body('email').notEmpty().withMessage('El email debe completarse').bail().isEmail().withMessage('El formato de email es inválido.').bail().custom(value => {
        let users = all();
        users = users.map(u => u.email);
        if(users.includes(value)){
            throw new Error('El email ya fue registrado')
        }
    }),
    body('password').notEmpty().withMessage('No puede quedar vacía la contraseña').bail().isLength({min:4})
]

module.exports = register;