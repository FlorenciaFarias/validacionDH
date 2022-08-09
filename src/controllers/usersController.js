const usersController = {

    register: function(req,res) {
        res.render('users/register', {
            title: 'Registro de usuarios',
            styles: ['register']
        });
    },
    registerProcess: function(req,res) {
        res.render('users/register', {
            title: 'Registro de usuarios',
            styles: ['register']
        });
    },
    login: function(req,res) {
        res.render('users/login', {
            title: 'Playground',
            styles: ['login']
        });
    }
};

module.exports = usersController;