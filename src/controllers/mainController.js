const mainController = {
    home: function(req,res) {
        res.render('/', {
            title: 'Home',
            styles: ['home']
        });
    }

}

module.exports = mainController;