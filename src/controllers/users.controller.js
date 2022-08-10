//No olvidar requerir express-validator//
//const {index,create,write} = require('../models/products.model');
const usersController = {

  register: function(req, res){
    return res.render('users/register',{
      styles:['forms']
    });
  },
/*Procesemos el formulario
 método: function(req, res){

  //Tu código

},*/

  login: function(req,res){
    return res.render('users/login',{
      styles:['forms']
    });
  }
}
  module.exports = usersController;