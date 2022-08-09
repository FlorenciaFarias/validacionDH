const auth = function(req, res, next){
    if(req.session && !req.session.user){
        return res.redirec('/users/login');
    }
    return next();
};

module.exports = auth;