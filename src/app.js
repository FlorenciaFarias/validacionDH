const express = require('express');
const { resolve } = require('path');
const method = require('method-override');
const session = require('express-session');
//Modules
const public = require('./modules/public');
const{ port, start }=require('./modules/port');

const app = express();

app.listen(port, start());

app.set ('views', resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(public);
app.use(express.urlencoded({extended:false})); //  req.body y el req.query
app.use(express.json());
app.use(method('m')); // En la url poner ?m=DELETE
app.use(session({
    secret:'nodejs',
    saveUninitialized:true,
    resave:true
  })) // req.session

app.use(require('./routes/main.routes'));
app.use('/users', require('./routes/users.routes'));


    