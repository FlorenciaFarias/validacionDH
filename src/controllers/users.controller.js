const {validationResult} = require('express-validator');
const {all,create,write} = require('../model/users.model');
const usersController = {

  register: function(req, res){
    return res.render('users/register',{
      styles:['forms']
    });
  },
process: (req,res) =>{
  let validaciones = validationResult(req);
  let {errors} = validaciones;
  if(errors && errors.length > 0){
    return res.render('users/register',{
      styles:['forms'],
      oldData: req.body,
      errors: validaciones.mapped()
    });
  } 
    let newUser = create(req.body);
    let users = all();
    users.push(newUser);
    write(users);
    return res.redirect('/users/login?msg="El registro fue exitos"');
 

},

  login: function(req,res){
    return res.render('users/login',{
      styles:['forms', 'login']
    });
  }
}
  module.exports = usersController;